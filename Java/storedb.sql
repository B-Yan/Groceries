DROP USER IF EXISTS 'tempUser'@'localhost';
CREATE USER 'tempUser'@'localhost' IDENTIFIED BY 'pass123';
GRANT ALL PRIVILEGES ON * . * TO 'tempUser'@'localhost';

DROP DATABASE IF EXISTS storedb;
CREATE DATABASE storedb;

USE storedb;

DROP TABLE IF EXISTS category;
CREATE TABLE IF NOT EXISTS category (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(50) DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO category (id, name, description) VALUES
(1, 'Fruits&Vegtables', NULL),
(2, 'Dairy&Eggs', 'Contains milk,eggs,cheese etc'),
(3, 'Grain Products', 'Mostly bread'),
(4, 'Frozen Foods', 'Contains ice cream,frozen meals,popsicles etc'),
(5, 'Snacks', 'Chips,desserts etc'),
(6, 'Clothes', 'For women,kids,men'),
(7, 'Electronics', NULL);

DROP TABLE IF EXISTS item;
CREATE TABLE IF NOT EXISTS item (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(50) DEFAULT 'Not Available',
  price double DEFAULT NULL,
  percentageOFF double DEFAULT NULL,
  imageURL varchar(100) DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO item (id, name, description, price, percentageOFF, imageURL) VALUES

(1, 'Apples', 'Price is per apple. The best apples in the US', 0.70, 0.00, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0000000004129.jpg'),
(2, 'Oranges', 'Price is per orange. The best oranges in the US', 0.70, 0.02, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0000000094012.jpg'),
(3, 'Carrots', 'Price is per carrot. The best carrots in the US', 0.20, 0.25, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0003338366001.jpg'),
(4, 'Potatoes', 'Price is per potato. The best potatos in the US', 1.00, 0.25, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0006882013225.jpg'),
(5, 'Milk','Price is per liter. The best milk in the US', 3.50, 0.05, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0005587202601.jpg'),
(6, 'Cheese','Price is per kilo. The best cheese in the US', 4.00, 0.05, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0006914310272.jpg'),
(7, 'Chocolate Milk', 'Price is per liter. The best milk in the US', 5.00, 0.15, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0005587209401.jpg'),
(8, 'Bread', 'Price is per bag. The best bread in the US', 1.90, 0.00, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0006107777124.jpg'),
(9, 'Rolls', 'Price is per box. The best roll in the US', 1.00, 0.00, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0006945901204.jpg'),
(10, 'Frozen Pizza', 'Price is per box. The best pizza in the US', 7.00, 0.00, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0062845659022.jpg'),
(11, 'Ice Cream', 'Price is per Bowl. The best ice cream in the US', 5.00, 0.25, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0005500097154.jpg'),
(12, 'Popsicles', 'Price is per box.', 3.50, 0.00, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0005877957826.jpg'),
(13, 'Chips', 'Price is per bag.', 2.00, 0.02, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0072822914039.jpg'),
(14, 'Brownies', 'Price is per box.', 3.00, 0.05, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0006073705105.jpg'),
(15, 'Donuts', 'Price is per box.', 2.00, 0.00, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0029825900000.jpg'),
(16, 'Beer', 'Price is per can.', 4.50, 0.01, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0005632701116.jpg'),
(17, 'Soft Drinks', 'Price is per can.', 1.50, 0.00, 'https://sob-prd-cdn-products.azureedge.net/media/image/product/en/large/0006900000982.jpg'),
(18, 'Jeans', 'Price is per piece.', 30.00, 0.02, 'https://i5.walmartimages.ca/images/Enlarge/298/744/6000202298744.jpg'),
(19, 'T-Shirts', 'Price is per piece.', 25.00, 0.15, 'https://i5.walmartimages.ca/images/Enlarge/683/375/6000202683375.jpg'),
(20, 'Jackets', 'Price is per piece.', 45.00, 0.05, 'https://i5.walmartimages.ca/images/Enlarge/594/869/6000202594869.jpg'),
(21, 'Dresses', 'Price is per piece.', 45.00, 0.03, 'https://i5.walmartimages.ca/images/Enlarge/345/942/6000203345942.jpg'),
(22, 'Long-Sleeve Shirts', 'Price is per piece.', 20.00, 0.00, 'https://images-americanas.b2w.io/produtos/01/00/sku/119300/4/119300481SZ.jpg'),
(23, 'Video Games', 'Price is per piece.', 79.99, 0.00, 'https://i5.walmartimages.ca/images/Enlarge/031/861/6000199031861.jpg'),
(24, 'DVDS', 'Price is per piece.', 80.00, 0.02, 'https://images-americanas.b2w.io/produtos/01/00/img/131994/6/131994658_1SZ.jpg'),
(25, 'Tvs','Price is per piece.', 1999.99, 0.02, 'https://images-americanas.b2w.io/produtos/01/00/img/3064506/1/3064506182_1SZ.jpg'),
(26, 'Computers', 'Price is per piece.', 2500.00, 0.00, 'https://images-americanas.b2w.io/produtos/01/00/img/42466/1/42466177_1SZ.jpg');

DROP TABLE IF EXISTS sales;
CREATE TABLE IF NOT EXISTS sales (
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS salesItem;
CREATE TABLE IF NOT EXISTS salesItem (
    id int NOT NULL AUTO_INCREMENT,
    sales_id int NOT NULL,
    item_id int NOT NULL,
    qte int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (sales_id) REFERENCES sales(id),
    FOREIGN KEY (item_id) REFERENCES item(id)
);

DROP TABLE IF EXISTS itemsincategory;
CREATE TABLE IF NOT EXISTS itemsincategory (
  id int NOT NULL AUTO_INCREMENT,
  itemID int NOT NULL,
  categoryID int NOT NULL,
  PRIMARY KEY (id),
  KEY itemID (itemID),
  KEY categoryID (categoryID)
);

INSERT INTO itemsincategory (id, itemID, categoryID) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 2),
(6, 6, 2),
(7, 7, 2),
(8, 8, 3),
(9, 9, 3),
(10, 10, 4),
(11, 11, 4),
(12, 12, 4),
(13, 13, 5),
(14, 14, 5),
(15, 15, 5),
(16, 16, 5),
(17, 17, 5),
(18, 18, 6),
(19, 19, 6),
(20, 20, 6),
(21, 21, 6),
(22, 22, 6),
(23, 23, 7),
(24, 24, 7),
(25, 25, 7),
(26, 26, 7);

DROP TABLE IF EXISTS store;
CREATE TABLE IF NOT EXISTS store (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  hours varchar(200) DEFAULT NULL,
  areOpen boolean DEFAULT NULL,
  address varchar(50) DEFAULT NULL,
  phoneNumber varchar(15) DEFAULT NULL,
  email varchar(50) DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO store (id, name, hours, areOpen, address, phoneNumber, email) VALUES
(1, 'Ocean', '1,9:00 am,5:00 pm/2,9:00 am,5:00 pm/3,9:00 am,5:00 pm/4,9:00 am,9:00 pm/5,9:00 am,5:00 pm/6,9:00 am,9:00 pm/7,9:00 am,5:00 pm', 1, '861 Ocean Ave', '(514)831-1234', 'ocean@stores.com'),
(2, 'Sea', '1,9:00 am,5:00 pm/2,9:00 am,5:00 pm/3,9:00 am,5:00 pm/4,9:00 am,9:00 pm/5,9:00 am,5:00 pm/6,9:00 am,9:00 pm/7,9:00 am,5:00 pm', 1, '123 Sea Ave', '(514)288-1561', 'sea@stores.com'),
(3, 'River', '1,8:00 am,5:00 pm/2,8:00 am,5:00 pm/3,8:00 am,5:00 pm/4,8:00 am,8:00 pm/5,8:00 am,5:00 pm/6,8:00 am,8:00 pm/7,8:00 am,5:00 pm', 1, '1513 River St', '(514)218-8622', 'river@stores.com'),
(4, 'The midnight store', '1,8:00 pm,11:00 pm/2,8:00 pm,11:00 pm/3,8:00 pm,11:00 pm/4,8:00 pm,11:00 pm/5,8:00 pm,11:00 pm/6,8:00 pm,11:00 pm/7,8:00 pm,11:00 pm', 1, '1513 River St', '(514)218-8622', 'river@stores.com');