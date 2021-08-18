DROP DATABASE IF EXISTS creativeWeb_db;
CREATE DATABASE creativeWeb_db;
 DROP TABLE user;
create table user (
	id INT,
	name VARCHAR(50),
	email VARCHAR(50),
	password VARCHAR(50),
	github VARCHAR(50)
);
insert into user (id, name, email, password, github) values (1, 'Helen McLuckie', 'hmcluckie0@blinklist.com', '350e2106d291aed8a4790597f58d82eb0de8942e', 'php.net');
insert into user (id, name, email, password, github) values (2, 'Lucky Deverose', 'ldeverose1@gizmodo.com', '350e2106d291aed8a4790597f58d82eb0de8942e', 'over-blog.com');
insert into user (id, name, email, password, github) values (3, 'Sarine Bentham3', 'sbentham2@nydailynews.com', '350e2106d291aed8a4790597f58d82eb0de8942e', 'printfriendly.com');
insert into user (id, name, email, password, github) values (4, 'Adrienne Ekell', 'aekell3@ameblo.jp', '350e2106d291aed8a4790597f58d82eb0de8942e', 'reddit.com');
insert into user (id, name, email, password, github) values (5, 'Elysee Fettis', 'efettis4@shop-pro.jp', '350e2106d291aed8a4790597f58d82eb0de8942e', 'cornell.edu');
insert into user (id, name, email, password, github) values (6, 'Royce Pegrum', 'rpegrum5@tamu.edu', '350e2106d291aed8a4790597f58d82eb0de8942e', 'altervista.org');
insert into user (id, name, email, password, github) values (7, 'Sarina Threlkeld', 'sthrelkeld6@php.net', '350e2106d291aed8a4790597f58d82eb0de8942e', 'loc.gov');
insert into user (id, name, email, password, github) values (8, 'Gerri Masding', 'gmasding7@cbc.ca', '350e2106d291aed8a4790597f58d82eb0de8942e', 'chron.com');
insert into user (id, name, email, password, github) values (9, 'Vincenz Dowell', 'vdowell8@cnbc.com', '350e2106d291aed8a4790597f58d82eb0de8942e', 'nhs.uk');
insert into user (id, name, email, password, github) values (10, 'Tan Wilton', 'twilton9@washington.edu', '350e2106d291aed8a4790597f58d82eb0de8942e', 'engadget.com');