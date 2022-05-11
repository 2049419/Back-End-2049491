DROP database projeto1;
CREATE DATABASE projeto1;
USE projeto1;

create table produtos (
	id int auto_increment,
    seller_id int not null,
    title varchar(300) not null,
    description_ varchar(500),
	price decimal(50,2) not null,
    url varchar(500),
    views_ int not null,
    images varchar(600),
    comments_ varchar(1000),
    tags varchar(100),
    primary key (id)
);

insert INTO produtos(seller_id, title, description_, price, url, views_, images, comments_, tags) VALUES ('1', 'Duck', 'Rubber Duck', 4.2, 'https://duckduckgo.com/', 10,'https://esquilo.io/png/thumb/i5CUbVH6JYuCXQb-Rubber-Duck-PNG-Photo.png', 'very rubber much duck', 'duck');
insert INTO produtos(seller_id, title, description_, price, url, views_, images, tags) VALUES ('2', 'Shades', 'Sun Glasses', 6.9, 'http://www.sunglasses.com/', 23,'https://cpng.pikpng.com/pngl/s/60-606449_sunglasses-png-sunglass-png-clipart.png', 'glasses');
insert INTO produtos(seller_id, title, price, url, views_, images, comments_, tags) VALUES ('2', 'amongus', 6.99, 'http://www.steam.com/', 12,'https://i.pinimg.com/originals/58/12/75/581275b3f49f4b2dc0c483fd54d0b7c7.jpg', 'I saw him vent I swear you guys...', 'among');
