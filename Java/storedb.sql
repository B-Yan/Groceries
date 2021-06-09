-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 08, 2021 at 08:15 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

DROP USER IF EXISTS 'tempUser'@'localhost';
CREATE USER 'tempUser'@'localhost' IDENTIFIED BY 'pass123';
GRANT ALL PRIVILEGES ON * . * TO 'tempUser'@'localhost';

DROP DATABASE IF EXISTS storedb;
CREATE DATABASE storedb;

USE storedb;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `storedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `description`) VALUES
(1, 'Fruits&Vegtables', NULL),
(2, 'Dairy&Eggs', 'Contains milk,eggs,cheese etc'),
(3, 'Grain Products', 'Mostly bread'),
(4, 'Frozen Foods', 'Contains ice cream,frozen meals,popsicles etc'),
(5, 'Snacks', 'Chips,desserts etc'),
(6, 'Clothes', 'For women,kids,men'),
(7, 'Electronics', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
CREATE TABLE IF NOT EXISTS `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `price` double(6,2) DEFAULT NULL,
  `percentageOFF` double(3,2) DEFAULT NULL,
  `imageURL` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`id`, `name`, `description`, `price`, `percentageOFF`, `imageURL`) VALUES
(1, 'Apples', 'Price is per apple', 0.70, 0.00, NULL),
(2, 'Oranges', 'Price is per orange', 0.70, 0.02, NULL),
(3, 'Carrots', 'Price is per carrot', 0.20, 0.00, NULL),
(4, 'Potatoes', 'Price is per potato', 1.00, 0.10, NULL),
(5, 'Milk', NULL, 3.50, 0.05, NULL),
(6, 'Cheese', NULL, 4.00, 0.05, NULL),
(7, 'Chocolate Milk', NULL, 5.00, 0.15, NULL),
(8, 'Bread', NULL, 1.90, 0.00, NULL),
(9, 'Rolls', NULL, 1.00, 0.00, NULL),
(10, 'Frozen Pizza', NULL, 7.00, 0.00, NULL),
(11, 'Ice Cream', NULL, 5.00, 0.05, NULL),
(12, 'Popsicles', NULL, 3.50, 0.00, NULL),
(13, 'Chips', NULL, 2.00, 0.02, NULL),
(14, 'Brownies', NULL, 3.00, 0.05, NULL),
(15, 'Donuts', NULL, 2.00, 0.00, NULL),
(16, 'Beer', NULL, 4.50, 0.01, NULL),
(17, 'Soft Drinks', NULL, 1.50, 0.00, NULL),
(18, 'Jeans', NULL, 30.00, 0.02, NULL),
(19, 'T-Shirts', NULL, 25.00, 0.02, NULL),
(20, 'Jackets', NULL, 45.00, 0.05, NULL),
(21, 'Dresses', NULL, 45.00, 0.03, NULL),
(22, 'Long-Sleeve Shirts', NULL, 20.00, 0.00, NULL),
(23, 'Video Games', NULL, 79.99, 0.00, NULL),
(24, 'DVDS', NULL, 15.00, 0.02, NULL),
(25, 'Tvs', NULL, 1999.99, 0.02, NULL),
(26, 'Computers', NULL, 2500.00, 0.02, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `itemsincategory`
--

DROP TABLE IF EXISTS `itemsincategory`;
CREATE TABLE IF NOT EXISTS `itemsincategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemID` int(11) NOT NULL,
  `categoryID` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `itemID` (`itemID`),
  KEY `categoryID` (`categoryID`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemsincategory`
--

INSERT INTO `itemsincategory` (`id`, `itemID`, `categoryID`) VALUES
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

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
CREATE TABLE IF NOT EXISTS `store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `hours` varchar(200) DEFAULT NULL,
  `areOpen` tinyint(1) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `phoneNumber` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `name`, `hours`, `areOpen`, `address`, `phoneNumber`, `email`) VALUES
(1, 'Ocean', '1,9:00 am,5:00 pm/2,9:00 am,5:00pm/3,9:00 am,5:00 pm/4,9:00 am, 9:00 pm/5,9:00 am,5:00 pm/6,9:00 am,9:00 pm/7,9:00 am,5:00pm', 1, '861 Ocean Ave', '(514)831-1234', 'ocean@stores.com'),
(2, 'Sea', '1,9:00 am,5 pm/2,9:00 am,5:00pm/3,9:00 am,5:00 pm/4,9:00 am,9:00 pm/5,9:00 am,5:00 pm/6,9:00 am,9:00 pm/7,9:00 am,5:00pm', 1, '123 Sea Ave', '(514)288-1561', 'sea@stores.com'),
(3, 'River', '1,9:00 am,5 pm/2,9:00 am,5:00pm/3,9:00 am,5:00 pm/4,9:00 am, 9:00 pm/5,9:00 am,5:00 pm/6,9:00 am,9:00 pm/7,9:00 am,5:00pm', 1, '1513 River St', '(514)218-8622', 'river@stores.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
