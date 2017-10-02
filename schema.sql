DROP DATABASE IF EXISTS list;

CREATE DATABASE list;

USE list;

CREATE TABLE people (
  id int NOT NULL AUTO_INCREMENT,
  person varchar(50) NOT NULL,
  status varchar(50) NOT NULL,
  present varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
