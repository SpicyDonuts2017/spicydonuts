var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'list'
});

var addOne = function(name, status, gift, callback){
  connection.query('INSERT INTO people (person, status, present) values (?, ?, ?)', [name, status, gift], function(err, results, fields){
    if (err) {

      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

var selectAll = function(callback) {
  connection.query('SELECT * FROM people', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var deleteOne = function(index, callback){
  connection.query('DELETE FROM people WHERE id = ' + index, function(err, results, fields){
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

var updateOne = function(index, status, present, callback){
  connection.query("UPDATE people SET status = '" + status + "', present = '" + present + "' where id = " + index, function(err, results, fields){
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

var changeOne = function(index, present, callback){
  connection.query("UPDATE people SET present = '" + present + "' where id = " + index, function(err, results, fields){
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}


module.exports.selectAll = selectAll;
module.exports.addOne = addOne;
module.exports.updateOne = updateOne;
module.exports.deleteOne = deleteOne;
module.exports.changeOne = changeOne;
