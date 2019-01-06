var fs = require('fs');
var natural = require('natural');
var data = require('./data.js');
var classifier = new natural.BayesClassifier();
var tokenizer = new natural.WordTokenizer();
var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");
var path = require('path');


var wordsPath = "../datasets/most_used.txt";
var most_used = fs.readFileSync(wordsPath, 'utf8').split('\n').slice(0,30000);
var data = data();
var trainingData = data[0];
var testingData = data[1];
var imdbTest = data[2];
var amazonTest = data[3];
var yelpTest = data[4];

console.log("training data length ", trainingData.length);

console.log("testing data length ", testingData.length);

console.log("Amazon testing data length ", amazonTest.length);

console.log("IMDB testing data length ", imdbTest.length);

console.log("Yelp testing data length ", yelpTest.length);


var tokenize = function (str) {
  return tokenizer.tokenize(str);
}

var findFeatures = function (arr) {
  new_arr = arr.map(function (el) {
    return el.toLowerCase();
  }).filter(function (el) {
    return most_used.indexOf(el) != -1;
  });
  return new_arr;
}

var trainClassifier = function () {
  var countPos = 0;
  var countNeg = 0;
  var goodPos = 0;
  var goodNeg = 0;
  for (var i = 0; i < trainingData.length; i++) {
    classifier.addDocument(findFeatures(tokenize(trainingData[i].text)), trainingData[i].polarity);
  }
  //-------------------->>Code below is for watching train process<<------------------------
  // classifier.events.on('trainedWithDocument', function (obj) {
  //     console.log(obj);
  //     /* {
  //     *   total: 23 // There are 23 total documents being trained against
  //     *   index: 12 // The index/number of the document that's just been trained against
  //     *   doc: {...} // The document that has just been indexed
  //     *  }
  //     */
  //  });
  classifier.train();
  classifier.save("classifier.json", function () {
      //saved!
  });
  console.log("Classifier trained!");
  }


var Accuracy = function (arr) {
  var count = arr.reduce(function (a, b) {
    return a + b;
  });
  return count / arr.length;
}

var testWithClassifier = function (testingData, classifier, name) {
  var classifierSuccessCounter = [];
  for (var i = 0; i < testingData.length; i++) {
    var classifierRes = classifier.classify(findFeatures(tokenize(testingData[i].text)));
    if (classifierRes == testingData[i].polarity) {
      classifierSuccessCounter.push(1);
    } else {
      classifierSuccessCounter.push(0);
    }
    // console.log('Classifier res: ' + classifierRes + ' sentence polarity: ' + testingData[i].polarity)
  }
  console.log(`Classifier Accuracy on data of ${classifierSuccessCounter.length} sentences of ${name}: ` + Accuracy(classifierSuccessCounter));
}


// ---------------->>Code Below is for training and saving classifier<<--------------------
// trainClassifier();


//----------->>Code below is used fot testing classifier on 3003 sentences<<-------------
var classifierPath = "classifier.json";
natural.BayesClassifier.load(classifierPath, null, function (err, classifier) {
    testWithClassifier(imdbTest, classifier, "IMDB");
    testWithClassifier(amazonTest, classifier, "AMAZON");
    testWithClassifier(yelpTest, classifier, "YELP");
    testWithClassifier(testingData, classifier, "ALL DATA");
    console.log("This was totally bad, I didn't enjoy a bit!");
    console.log('neg ' + classifier.classify(findFeatures(tokenize("This was totally bad, I didn't enjoy a bit!"))));
    console.log("I really enjoyed this movie, I will se it again soon because it's too good");
    console.log('pos ' + classifier.classify(findFeatures(tokenize("I really enjoyed this movie, I will se it again soon because it's too good"))));
    console.log("This was really bad, don't want it again");
    console.log('neg ' + classifier.classify(findFeatures(tokenize("This was really bad, don't want it again"))));
    console.log("This is catastrophic, product was late and it came in awful condition");
    console.log('neg ' + classifier.classify(findFeatures(tokenize("This is catastrophic, product was late and it came in awful condition"))));
    console.log("This product was not good at all");
    console.log('neg ' + classifier.classify(findFeatures(tokenize("This product was not good at all"))));
    console.log("This product is best thing ever");
    console.log('pos ' + classifier.classify(findFeatures(tokenize("This product is best thing ever"))));
    console.log("I made my children really happy after meeting with you.");
    console.log('pos ' + classifier.classify(findFeatures(tokenize("I made my children really happy after meeting with you."))));
    console.log("I'll never buy this product again.");
    console.log('neg ' + classifier.classify(findFeatures(tokenize("I'll never buy this product again."))));
    console.log("Me and my family had really nice time with you :)");
    console.log('pos ' + classifier.classify(findFeatures(tokenize("Me and my family had really nice time with you :)"))));
    console.log("Not recommended.");
    console.log('neg ' + classifier.classify(findFeatures(tokenize("Not recommended."))));
    console.log("I really liked the hospitality of our host");
    console.log('pos' + classifier.classify(findFeatures(tokenize("I really liked the hospitality of our host"))));
    console.log("Everything was fine and our host was very nice :)n");
    console.log('pos ' + classifier.classify(findFeatures(tokenize("Everything was fine and our host was very nice :)"))));
    console.log("This product is utter junk");
    console.log('neg ' + classifier.classify(findFeatures(tokenize("This product is utter junk"))));
});

module.exports = {
  findFeatures: findFeatures,
  tokenize: tokenize
}
