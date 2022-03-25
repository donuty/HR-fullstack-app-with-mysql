var db = require('./mysql_connect');

module.exports = {

  post: function (params, callback) {

    params.forEach(repo => {
      var eachParams = [repo.id, repo.name, repo.html_url, repo.owner.login, repo.size];
      var queryStr = 'INSERT IGNORE INTO repos (repo_id, repo_name, repo_url, owner_login, size) VALUES (?, ?, ?, ?, ?);'
        db.query(queryStr, eachParams, (err) => {
          if (err) {
            callback(err);
          } else {
            callback(null);
          }
        });
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
