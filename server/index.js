var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql/index.js');


var items = require('../database-mysql');


var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  let topic = req.body.topic;
  db.createSurvey([topic, 0, 0, 0], (err, data) => {
    if (err) {
      console.log('err in server post', err);
    } else {
      console.log('success!!!!', data);
    }
  });
});

app.get('/surveys', (req, res) => {
  db.getAllSurveys((err, data) => {
    if (err) {
      console.log('err in server get!', err);
    } else {
      res.send(data);
    }
  });
});

app.listen(process.env.PORT, function() {
  console.log('listening on port `{process.env.PORT}`!');
});

