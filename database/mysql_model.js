var db = require('./mysql_connect');

module.exports = {

  post: function (params, callback) {

    var queryStr = 'INSERT INTO repos (repo_id, repo_name, repo_url, owner_login, size) VALUES (?, ?, ?, ?, ?);'

    db.query(queryStr, params, function (err) {
      if (err) {
        console.log('error at query during post: ');
        callback(err);
      } else {
        callback(null);
      }
      console.log('db.query(insert) successful');
    });
  },

  get: function (callback) {

    db.query('SELECT * from repos', function(err, results) {
      if (err) {
        console.log('error at query during post: ', err);
        callback(err);
      } else {
        callback(null, results);
      };
    })
  }

    // connection.query(select such and such)
  // may have to use callback in connection.query
  //  .then(do something with info)
  //  .catch(err => error)

  // connection.query(
  //   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  //   ['Page', 45],
  //   function(err, results) {
  //     console.log(results);
  //   }
  // );


};
