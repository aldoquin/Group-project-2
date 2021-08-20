DROP DATABASE IF EXISTS creativeWeb_db;
CREATE DATABASE creativeWeb_db;
 DROP TABLE user;
create table user (
  id INT,
  name VARCHAR(50),
  email VARCHAR(50),
  github VARCHAR(1000)
);
insert into user (id, name, email,  github) values (1, 'Aldo Quintero', 'aldoq95@gmail','https://github.com/aldoquin');
insert into user (id, name, email,  github) values (2, 'Juan Bernal', ' bernal1307@gmail.com',  'https://github.com/JPablo73');
insert into user (id, name, email, github) values (3, 'Michaela Galvez', 'michaela.g.business@gmail.com',  'github.com/mmgalv');
insert into user (id, name, email, github) values (4, 'Ever Medina', ' evermedina2025@gmail.com', 'github.com/medina2021');
USE creativeWeb_db;
SELECT *FROM user;