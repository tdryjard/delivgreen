DROP database IF EXISTS delivgreen_db;

CREATE database delivgreen_db;

USE delivgreen_db;

CREATE TABLE roles (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL
);

CREATE TABLE users_roles (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    role_id INT NOT NULL,
    user_id INT NOT NULL
 );

CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    lastname VARCHAR(100) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL,
    phone VARCHAR(45) NOT NULL
);

CREATE TABLE professional (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    kbis VARCHAR(100) NOT NULL,
    siret VARCHAR(100) NOT NULL,
    tva VARCHAR(100) NOT NULL,
    user_id INT NOT NULL
);

CREATE TABLE delivery_man (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    city VARCHAR(100) NOT NULL,
    perimeter INT NOT NULL,
    is_pro BOOLEAN,
    rib VARCHAR(50) NOT NULL,
    accepted BOOLEAN
);

CREATE TABLE orders (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    lngt FLOAT NOT NULL,
    height FLOAT NOT NULL,
    weight FLOAT NOT NULL,
    limit_date VARCHAR(50) NOT NULL,
    publish_date VARCHAR(50) NOT NULL,
    accepted_date VARCHAR(50),
    estimated_date VARCHAR(50),
    pick_up_date VARCHAR(50),
    arrival_date VARCHAR(50),
    price FLOAT NOT NULL,
    start_address_id INT,
    end_address_id INT,
    user_id INT,
    delivery_man_id INT,
    signature VARCHAR(200)
);

CREATE TABLE orders_status (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    status_id INT NOT NULL
);

CREATE TABLE status (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE address (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    lat FLOAT NOT NULL,
    lng FLOAT NOT NULL
);

ALTER TABLE users_roles
    ADD CONSTRAINT fk_users_roles__roles_id FOREIGN KEY (role_id) REFERENCES roles(id),
    ADD CONSTRAINT fk_users_roles__users_id FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE professional
    ADD CONSTRAINT fk_professional__users_id FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE orders
    ADD CONSTRAINT fk_orders__start_address_id FOREIGN KEY (start_address_id) REFERENCES address(id),
    ADD CONSTRAINT fk_orders__end_address_id FOREIGN KEY (end_address_id) REFERENCES address(id),
    ADD CONSTRAINT fk_orders__user_id FOREIGN KEY (user_id) REFERENCES users(id),
    ADD CONSTRAINT fk_orders__delivery_man_id FOREIGN KEY (delivery_man_id) REFERENCES delivery_man(id);

ALTER TABLE orders_status
    ADD CONSTRAINT fk_orders_status__order_id FOREIGN KEY (order_id) REFERENCES orders(id),
    ADD CONSTRAINT fk_orders_status__status_id FOREIGN KEY (status_id) REFERENCES status(id);



insert into address (name, lat, lng) values ('12 rue roger leclerc', 43, 1.2);
insert into address (name, lat, lng) values ('9 rue de binguin ', 42, 1.5);
insert into address (name, lat, lng) values ('25 rue des croix blanches', 42.5, 1.7);
insert into users (lastname, firstname, email, password, phone) values ('dubois', 'robin', 'robin.dubois@gmail.com', 'kikou154', '0678459412');
insert into users (lastname, firstname, email, password, phone) values ('dubelle', 'robine', 'robine.dubelles@gmail.com', 'kikette154', '0678459412');
insert into users (lastname, firstname, email, password, phone) values ('duboss', 'robinette', 'robinette.duboss@gmail.com', 'kikouke154', '0678459412');
insert into orders (lngt, height, weight, limit_date, publish_date, price, start_address_id, user_id, arrival_date) values (5, 2, 1.5, '20/10/2020', '15/10/2020', 5, 1, 1, "20/10/2020");
insert into orders (lngt, height, weight, limit_date, publish_date, price, start_address_id, user_id, arrival_date) values (12, 4, 13.5, '05/10/2020', '00/10/2020', 15, 3, 2, '05/10/2020');
insert into orders (lngt, height, weight, limit_date, publish_date, price, start_address_id, user_id, arrival_date) values (123, 40, 3.5, '10/10/2020', '05/10/2020', 12, 2, 1, "10/10/2020")
insert into address (name, lat, lng) values ('9 rue roger leclerc', 45, 1.5);
insert into delivery_man (city, perimeter, is_pro, rib, accepted) values ('orleans', 20, true, 'F4578164', true)
insert into delivery_man (city, perimeter, is_pro, rib, accepted) values ('orleans', 25, true, 'F4578464', true)
update orders set start_address_id = 1 where id = 1;
update orders set end_address_id = 2 where id = 2;
