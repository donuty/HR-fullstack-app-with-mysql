DROP DATABASE IF EXISTS test;
CREATE DATABASE test;
USE test;

DROP TABLE IF EXISTS animals;
CREATE TABLE animals (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(30) NOT NULL,
     PRIMARY KEY (id)
);



/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < database/test.sql
 *  to create the database and the tables.*/



-- INSERT INTO animals (name) VALUES
--     ('dog'),('cat'),('penguin'),
--     ('lax'),('whale'),('ostrich');

-- SELECT * FROM animals