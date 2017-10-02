var express = require('express');
var bodyParser = require('body-parser');


var items = require('../database-mysql');


var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
	req.body
}

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

