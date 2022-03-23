DROP DATABASE IF EXISTS GITHUB_REPOS;
CREATE DATABASE GITHUB_REPOS;
USE GITHUB_REPOS;

DROP TABLE IF EXISTS repos;
CREATE TABLE repos (
  repo_id int NOT NULL,
  repo_name text NOT NULL,
  repo_url text NOT NULL,
  owner_login varchar(30) NOT NULL,
  size int NOT NULL,
  PRIMARY KEY(repo_id)
);


/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < database/mysql_schema.sql
 *  to create the database and the tables.*/
