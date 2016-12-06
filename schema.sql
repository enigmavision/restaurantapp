CREATE DATABASE hotrestaurant;

USE hotrestaurant;
CREATE TABLE reservations (
id INTEGER NOT NULL auto_increment,
PRIMARY KEY (id),
username VARCHAR(100) NOT NULL,
person VARCHAR(100) NOT NULL,
phonenumber INTEGER(100) NOT NULL,
email VARCHAR (100) NOT NULL
);
