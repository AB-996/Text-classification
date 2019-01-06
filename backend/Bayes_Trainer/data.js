var natural = require('natural');
var fs = require('fs');
var tokenizer = new natural.WordTokenizer();
var positive = [];
var negative = [];
var data = [];
var all_words = [];
var testingData = [];
var imdbTestData = [];
var amazonTestData = [];
var yeplTestData = [];

var uselessWords = ["n't", "'s", "'m", "'ve", "'re"];


var createTestData = function (arr, arr2) {
  for (var i = 0; i < arr.length; i++) {
    var senArr = arr[i].split('\t');
    if (senArr[1] == '1') {
      arr2.push({
        text: senArr[0].trim(),
        polarity: 'pos'
      });
    } else {
      arr2.push({
        text: senArr[0].trim(),
        polarity: 'neg'
      });
    }
  }
}

var taggAndAdd = function (tagged) {
  for (var j = 0; j < tagged.length; j++) {
    if (tagged[j].pos.split("")[0] == "J" || tagged[j].pos.split("")[0] == "V" || tagged[j].pos == "RB") {
      if (uselessWords.indexOf(tagged[j].value.toLowerCase()) != -1) {
        all_words.push(tagged[j].lemma.toLowerCase())
      } else {
        all_words.push(tagged[j].value.toLowerCase());
      }
    }
  }
}

var addToData = function (arr, pol, re) {
  for (var i = 0; i < arr.length; i++) {
    var sen = arr[i].trim().replace(re, '');
    data.push({
      text: sen,
      polarity: pol
    });
    //------Code below is for finding most used words in dataset--------
    // var tagged = tagger.tagSentence(sen);
    // taggAndAdd(tagged);
    // var tokenized = tokenizer.tokenize(sen);
    // for (var j = 0; j < tokenized.length; j++) {
    //   all_words.push(tokenized[j].toLowerCase());
    // }
  }
}

var prepare_data = function () {
  var positiveData = fs.readFileSync('../datasets/training_set/positive_shortened.txt', 'utf8').split('\n');
  var negativeData = fs.readFileSync('../datasets/training_set/negative_shortened.txt', 'utf8').split('\n');
  var imdbTest = fs.readFileSync('../datasets/testing_set/imdb_labelled.txt', 'utf8').split('\n');
  var amazonTest = fs.readFileSync('../datasets/testing_set/amazon_cells_labelled.txt', 'utf8').split('\n');
  var yelpTest = fs.readFileSync('../datasets/testing_set/yelp_labelled.txt', 'utf8').split('\n');
  var pattern = "<br /><br />";
  var re = new RegExp(pattern, "g");
  addToData(positiveData, 'pos', re);
  addToData(negativeData, 'neg', re);
  createTestData(imdbTest, testingData);
  createTestData(amazonTest, testingData);
  createTestData(yelpTest, testingData);
  createTestData(imdbTest, imdbTestData);
  createTestData(amazonTest, amazonTestData);
  createTestData(yelpTest, yeplTestData);

  data = shuffle(data);
  testingData = shuffle(testingData);
  // ------Code below is for finding most used words in dataset--------
  // var frequency = frequencyDist(all_words);
  // var file = fs.createWriteStream('../datasets/most_used.txt');
  // file.on('error', function (err) {
  //   console.log("Error occured while writing to file")
  // });
  // frequency.forEach(function (v) {
  //   file.write(v.word + '\n');
  // });
  // file.end();
}


var frequencyDist = function (arr) {
  var prev;
  var a = [];
  var count = 1;
  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push({
        word: arr[i],
        count: count
      });
    } else {
      a[a.length - 1].count += 1;
    }
    prev = arr[i];
  }
  a.sort(function (a, b) {
    return b.count - a.count;
  });
  return a;

}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

module.exports = function () {
  prepare_data();
  return [data, testingData, imdbTestData, amazonTestData, yeplTestData];
}
