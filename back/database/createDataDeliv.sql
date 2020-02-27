DROP database IF EXISTS delivgreen_db;

CREATE database delivgreen_db;

USE delivgreen_db;

CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    lastname VARCHAR(100) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL,
    phone VARCHAR(45) NOT NULL,
    role VARCHAR(45) NOT NULL,
    professional_id INT NULL,
    delivery_man_id INT NULL
);

CREATE TABLE professional (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    kbis VARCHAR(100) NOT NULL,
    siret VARCHAR(100) NOT NULL,
    tva VARCHAR(100) NOT NULL
);

CREATE TABLE delivery_man (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    is_pro BOOLEAN,
    rib VARCHAR(50) NOT NULL,
    accepted BOOLEAN
);

CREATE TABLE orders (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    lngt FLOAT NOT NULL,
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

ALTER TABLE orders
    ADD CONSTRAINT fk_orders__start_address_id FOREIGN KEY (start_address_id) REFERENCES address(id),
    ADD CONSTRAINT fk_orders__end_address_id FOREIGN KEY (end_address_id) REFERENCES address(id),
    ADD CONSTRAINT fk_orders__user_id FOREIGN KEY (user_id) REFERENCES users(id),
    ADD CONSTRAINT fk_orders__delivery_man_id FOREIGN KEY (delivery_man_id) REFERENCES delivery_man(id);

ALTER TABLE users
    ADD CONSTRAINT fk_users__delivery_man_id FOREIGN KEY (delivery_man_id) REFERENCES delivery_man(id),
    ADD CONSTRAINT fk_users__prfessional_id FOREIGN KEY (professional_id) REFERENCES professional(id);

ALTER TABLE orders_status
    ADD CONSTRAINT fk_orders_status__order_id FOREIGN KEY (order_id) REFERENCES orders(id),
    ADD CONSTRAINT fk_orders_status__status_id FOREIGN KEY (status_id) REFERENCES status(id);