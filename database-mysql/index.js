const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

// function to get all surveys
var getAllSurveys = function(callback) {
  connection.query('select * from Survey', function(err, results, fields) {
    if (err) {
      console.log(err, null);
    } else {
      callback(null, results);
    }
  });
};

// function to update survey table with new survey
var createSurvey = function(params, callback) {
  connection.query('insert into Survey set ?', params, function(err, results, fields) {
    if (err) {
      console.log(err, null);
    } else {
      callback(null, results);
    }
  });
};

// function to update survey information 

// function to create new user
var createUser = function(params, callback) {
  connection.query('insert into Users set ?', params, function(err, results, fields) {
    if (err) {
      console.log(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getAllSurveys,
  createSurvey,
  createUser
};