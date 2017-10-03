var expect = require('chai').expect;
var mysql = require('mysql');
var request = require('request');
var httpMocks = require('node-mocks-http');

var app = require('../react-client/index.jsx');
var schema = require('../database-mysql/config.js');
var port = 4568;

describe('', function() {
  var db;
  var server;

  var clearDB = function(connection, tablenames, done) {
    var count = 0;
    tablenames.forEach(function(tablename) {
      connection.query('DROP TABLE IF EXISTS ' + tablename, function() {
        count++;
        if (count === tablenames.length) {
          return schema(db).then(done);
        }
      });
    });
  };

  