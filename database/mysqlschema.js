const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create table
  return db.queryAsync(`
    CREATE TABLE repos (
      id int NOT NULL AUTO_INCREMENT,
      repo_name varchar(20) NOT NULL,
      repo_url text NOT NULL,
      owner_login varchar(20) NOT NULL,
      forks int NOT NULL,
      PRIMARY KEY (ID)
    );`)
    .error(err => {
      console.log(err);
    });
};

// CREATE DATABASE GITHUB_REPOS;

// USE GITHUB_REPOS;

// CREATE TABLE repos(
//   id int NOT NULL AUTO_INCREMENT,
//   repo_name varchar(20) NOT NULL,
//   repo_url text NOT NULL,
//   owner_login varchar(20) NOT NULL,
//   forks int NOT NULL,
//   PRIMARY KEY(ID)
// )
