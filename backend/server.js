var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var natural = require('natural');
var bayes = require('./Bayes_Trainer/bayes_trainer');
var path = require('path');

var app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use(express.static(path.join(__dirname, 'angular')));


app.listen(PORT, function() {
  console.log('Listening on port 8000');
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'angular/index.html'));
});

app.post('/analyze', function(req, res) {
  console.log('got request');
  var arr = req.body;
  var posCount = 0;
  var negCount = 0;
  natural.BayesClassifier.load('./Bayes_Trainer/classifier.json',null, function(err, classifier) {
    for(var i = 0; i < arr.length; i++) {
      console.log(bayes.findFeatures(bayes.tokenize(arr[i].answer)));
      console.log(classifier.getClassifications(bayes.findFeatures(bayes.tokenize(arr[i].answer))));
      var sentiment = classifier.classify(bayes.findFeatures(bayes.tokenize(arr[i].answer)));
      sentiment == 'pos' ? posCount++ : negCount++;
      arr[i].sentiment = sentiment;
    }
    res.status(200).json({
      data : arr,
      overall: posCount > negCount ? 'pos' : 'neg'
    });
  });
});
