var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var list = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();
app.use(bodyParser.json())

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));
app.post('/list', function(req, res){
	var name = req.body.name;
	if (name === 'Devon' || name === 'Roscoe'){
		var status = 'Naughty'
		var present = "A BAG OF COAL";
	} else {
		var status = req.body.status;
		var present = req.body.present;
	}
	list.addOne(name, status, present, function(err, data){
		if (err){
			res.sendStatus(501);
		} else {
			res.send('ADD')
		}
	})
})

app.post('/update', function(req, res){
	var index = req.body.index;
	var status = req.body.status;
	var present = req.body.present
	list.updateOne(index, status, present, function(err, data){
		if (err){
			res.sendStatus(502);
		} else {
			res.send("UPDATE")
		}
	})
})

app.post('/change', function(req, res){
	var index = req.body.index;
	var present = req.body.present;
	list.changeOne(index, present, function(err, data){
		if (err){
			res.sendStatus(503);
		} else {
			res.send('CHANGE')
		}
	})
})

app.post('/delete', function(req, res){
	var index = req.body.index;
	list.deleteOne(index, function(err, data){
		if (err){
			res.sendStatus(504);
		} else {
			res.send('DELETE')
		}
	})
})

app.get('/list', function (req, res) {
  list.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

