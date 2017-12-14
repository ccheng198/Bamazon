DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE DATABASE bamazon;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT,
	product_name VARCHAR (100) NOT NULL,
	department_name VARCHAR (100),
	price INT NOT NULL,
	stock_quantity INT,
	PRIMARY KEY (item_id)
);

INSERT INTO
products (product_name, department_name, price, stock_quantity)
VALUES ("Pillow", "Schleeps", 18, 1000),
("Hat", "Caplessless", 30, 500),
("Book", "Barns & Novels", 27, 1000),
("Playing Cards", "Unicycle", 10, 700),
("Lightbulb", "Light En Dark", 7, 2000),
("Watch", "Swiz", 125, 250),
("Stuffed Animal", "Build a Bandicoot", 35, 400),
("Backpack", "The Patagonia Face", 100, 350),
("Portable Battery", "eLectronics", 20, 1000),
("Video Game", "Sunny", 60, 1500)
