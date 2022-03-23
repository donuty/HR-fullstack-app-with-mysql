var mysql = require('mysql2');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'GITHUB_REPOS'
});

connection.connect(function(err) {
  if (err) {
    console.log('error connecting at connect.js: ', err)
  }
  connection.query('USE GITHUB_REPOS', function (err, result, fields) {
    if (err) {
      console.log('error making query at connect.js: ', err)
    };
    console.log('connection successful: using GITHUB_REPOS');
  });
});

module.exports = connection;