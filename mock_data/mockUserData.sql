DROP DATABASE IF EXISTS creativeWeb_db;
CREATE DATABASE creativeWeb_db;
 DROP TABLE dataUser;
create table dataUser (
	id INT,
	name VARCHAR(50),
	email VARCHAR(50),
	password VARCHAR(1000)
);
insert into user (id, name, email,  password) values (1, 'Aldo Quintero', 'aldoq95@gmail','123');



USE creativeWeb_db;
SELECT *FROM dataUser;