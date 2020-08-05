CREATE DATABASE  IF NOT EXISTS `myblog` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `myblog`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: myblog
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` longtext NOT NULL,
  `createtime` bigint NOT NULL,
  `author` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,'标题1','内容1',155545452545,'zhangsan'),(2,'标题25','内容26',155657672545,'lisi'),(3,'标题5','内容C',155548692545,'zhangsan'),(8,'yyh看凤凰网','yyh看凤凰网',1590683859848,'lisi'),(13,'&lt;script&gt;alert(1)&lt;/script&gt;','g',1590852123603,'lisi'),(14,'xin555686急急急啊发顺丰','xin555686急急急\n啊发顺丰999',1591014837278,'lisi'),(16,'分','是',1591238027141,'zhangsan'),(17,'分','是### 分```js\n萨达是否\n``````language\n是var i = 5\n```\n\n',1591238084721,'zhangsan'),(18,'分','是### 分```js\n萨达是否\n``````language\n是var i = 5\n```\n\n',1591238154349,'zhangsan'),(19,'的','# 水平居中布局：\n1. 父容器上定义固定宽度， margin: 0 auto。\n```language\n<div>\n        <div>sdf</div>\n</div>\n```\n2. 父元素text-algin设置为center，子元素中将display设置为inline-block\n```language\n#div2 {\n    width: 300px;\n    height: 300px;\n    border: 1px solid red;\n    text-align: center;\n}\n#div2 p {\n    width: 100px;\n    height: 100px;\n    background-color: green;\n    /* 这里的margin只是清除p标签默认的外边距 */\n    margin: 0;\n    display: inline-block;\n}\n<div>\n        <p></p>\n</div>\n```\n3. 使用定位，子绝父相，然后如果子元素宽度已知 ，left:50%;margin-left:-宽度的一半; 如果宽子元素宽度未知，left:50%;transform:translateX(-50%);\n```language\n<div>\n        \n        <div>\n            fdsfdsfsf\n        </div>\n</div>\n<div>\n        \n        <div>\n            fdsfdsfsf\n        </div>\n</div>\n```\n4. 使用flex布局，父元素设置display: flex; justify-content:center;\n```language\n<div>\n        <div>fds</div>\n</div>\n```\n\n# 垂直居中：\n1. 设置父容器的height与line-height相等\n```language\n<div>\n        <div>fsd</div>\n</div>\n```\n2. 子绝父相，然后如果高度已知 top:50%;margin-top:-高度的一半，如果高度未知，top:50%;transform:translateY(-50%);\n```language\n<div>\n        \n        <div>\n            fdsfdsfsf\n        </div>\n</div>\n<div>\n        \n        <div>\n            fdsfdsfsf\n        </div>\n</div>\n```\n3. 使用flex布局，父元素设置display: flex; align-items:center;\n```language\n<div>\n        <div>fds</div>\n</div>\n```\n\n',1591279440150,'lisi'),(20,'53','5353',1591284200276,'zhangsan'),(21,'沙发','沙发',1591284293706,'zhangsan'),(22,'是','的',1591284369664,'zhangsan'),(23,'是',' 的',1591284392099,'zhangsan');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `realname` varchar(10) NOT NULL,
  `isadmin` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'zhangsan','524ab85686df0e52ada43b11b53cce35','张三','admin'),(3,'lisi','524ab85686df0e52ada43b11b53cce35','李四5','admin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-10 21:23:46
