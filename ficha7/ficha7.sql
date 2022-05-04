DROP DATABASE ficha7;
CREATE DATABASE ficha7;
USE ficha7;

create table persons (
	id int auto_increment,
    firstname varchar(300) not null,
    lastname varchar(300) not null,
    profession varchar(300),
	age int not null,
    primary key (id)
);

insert INTO persons(firstname, lastname, profession, age) VALUES ('Gajo', 'Bom', 'boss', 69);
INSERT INTO persons(firstname, lastname, profession, age) VALUES ('gaja', 'boa', 'secretary', 30);
INSERT INTO persons(firstname, lastname, age) VALUES ('child', 'McChildFace', 2);
INSERT INTO persons(firstname, lastname, profession, age) VALUES ('lalala', 'lololo', '???', 420);
