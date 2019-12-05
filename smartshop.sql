CREATE DATABASE  IF NOT EXISTS `smartshop` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `smartshop`;
-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: smartshop
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bill` (
  `bill_id` int(11) NOT NULL AUTO_INCREMENT,
  `purchase_date` date DEFAULT NULL,
  `user_user_id` varchar(255) NOT NULL,
  `product_product_code` varchar(255) NOT NULL,
  `quantity` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`bill_id`),
  KEY `FK7m4ndsx0qyrpb92xqcbc6gj9j` (`user_user_id`),
  KEY `FKttjv3sd1m0b3esfrmtfy31mq` (`product_product_code`),
  CONSTRAINT `FK7m4ndsx0qyrpb92xqcbc6gj9j` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKttjv3sd1m0b3esfrmtfy31mq` FOREIGN KEY (`product_product_code`) REFERENCES `product` (`product_code`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
INSERT INTO `bill` VALUES (7,'2019-11-30','xyz','3','4'),(8,'2019-11-30','xyz','1','1'),(9,'2019-11-30','abc','2','1'),(14,'2019-12-02','abc','1','3');
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offer` (
  `offer_date` date DEFAULT NULL,
  `discounted_rate` decimal(5,2) DEFAULT NULL,
  `offer` int(11) DEFAULT NULL,
  `product_code` varchar(50) NOT NULL,
  PRIMARY KEY (`product_code`),
  KEY `fk_table1_product_idx` (`product_code`),
  CONSTRAINT `fk_table1_product` FOREIGN KEY (`product_code`) REFERENCES `product` (`product_code`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offer`
--

LOCK TABLES `offer` WRITE;
/*!40000 ALTER TABLE `offer` DISABLE KEYS */;
/*!40000 ALTER TABLE `offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `product_code` varchar(50) NOT NULL,
  `product_name` varchar(50) DEFAULT NULL,
  `product_type` varchar(50) DEFAULT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `rate_per_quantity` decimal(5,2) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `add_date` date DEFAULT NULL,
  `aisle` varchar(15) DEFAULT NULL,
  `shelf` varchar(15) DEFAULT NULL,
  `date_of_manufacture` date DEFAULT NULL,
  `date_of_expiry` date DEFAULT NULL,
  `product_image` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`product_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('1','Deo','Perfume','Axe',NULL,101.00,7,'2017-03-11','pata nahi','PATA NAHI','2017-03-11','2017-03-11','https://images.unsplash.com/photo-1557170334-a9632e77c6e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),('2','Patanjali Medicine','HeathCare','Patanjali',NULL,20.00,90,'2017-06-26','patanahi ','patanahi','2017-03-06','2017-03-22','https://images.unsplash.com/photo-1544829894-eb023ba95a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),('3','Parle G','Food','Parle',NULL,20.00,100,'2017-06-26','patanahi ','patanahi','2017-03-06','2017-03-22','https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),('5','Fogg','Perfume','Fogg',NULL,100.00,100,'2019-12-17','pata nahi','patanahi','2019-12-18','2019-12-19','https://images.unsplash.com/photo-1557170334-a9632e77c6e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `ro_id` int(11) NOT NULL,
  `ro_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ro_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'user'),(2,'admin'),(3,'super');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(5) DEFAULT NULL,
  `contact_number` varchar(10) DEFAULT NULL,
  `user_id` varchar(45) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('abc','abc',21,'Male','7777777777','abc','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','A'),('admin','admin',21,'Male','8888888888','admin','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','A'),('manager','manager',21,'Male','1234567899','manager','$2a$10$yzYgSMAjd5XXDWfnPqchK.yW7tbc8Rp1pffSh95W50fxhCTE3jDOq','P'),('super','super',21,'Male','5555555555','super','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','A'),('xyz','xyz',21,'Male','9999999999','xyz','$2a$10$fHg7WCJT55w4AosE1lIvQOardAvEaYHYK4L6l.xHpn3CVuBInHRry','A'),('zzz','zzz',21,'Male','9999','zzz','$2a$10$FynDSF2Ts9kvfmwQNJMfPukRnwujKrF7lv1EqaxB14e7vsLSQxpL.','D');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `ur_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_ro_id` int(11) NOT NULL,
  `user_user_id` varchar(45) NOT NULL,
  PRIMARY KEY (`ur_id`),
  KEY `fk_user_role_role1_idx` (`role_ro_id`),
  KEY `fk_user_role_user1_idx` (`user_user_id`),
  CONSTRAINT `fk_user_role_role1` FOREIGN KEY (`role_ro_id`) REFERENCES `role` (`ro_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,1,'abc'),(2,2,'admin'),(3,3,'super'),(4,1,'xyz'),(5,2,'manager'),(9,2,'zzz');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-03  9:51:04
