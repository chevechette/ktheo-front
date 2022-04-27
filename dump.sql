-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: ktheo
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `ktheo`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `ktheo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `ktheo`;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` bigint NOT NULL,
  `postal_code` int NOT NULL,
  `street_name` varchar(255) DEFAULT NULL,
  `street_number` int NOT NULL,
  `street_number_complement` varchar(255) DEFAULT NULL,
  `town` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKda8tuywtf0gb6sedwk7la1pgi` (`user_id`),
  CONSTRAINT `FKda8tuywtf0gb6sedwk7la1pgi` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork`
--

DROP TABLE IF EXISTS `artwork`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artwork` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_on` datetime DEFAULT CURRENT_TIMESTAMP,
  `creation_location` varchar(80) DEFAULT NULL,
  `creator` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `estimated_price` varchar(255) DEFAULT NULL,
  `is_restricted` bit(1) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `auction_id` bigint DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  `owner_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrm0jj1hvcc99ls094tkoxjywi` (`auction_id`),
  KEY `FKyh6u18yt4ist1i3c1ahqmqoh` (`category_id`),
  KEY `FKpsv0yutfc2lgvnvnid9kbyvdk` (`owner_id`),
  CONSTRAINT `FKpsv0yutfc2lgvnvnid9kbyvdk` FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKrm0jj1hvcc99ls094tkoxjywi` FOREIGN KEY (`auction_id`) REFERENCES `auction` (`id`),
  CONSTRAINT `FKyh6u18yt4ist1i3c1ahqmqoh` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork`
--

LOCK TABLES `artwork` WRITE;
/*!40000 ALTER TABLE `artwork` DISABLE KEYS */;
INSERT INTO `artwork` VALUES (1,'2022-04-27 11:50:56','Thailand','Jo Key Rowling','Collection de l\'édition thailandaise de Hairy Potdebeurre, sortie pour des 20 ans de la série.','60K BAT',_binary '\0','Hairy Potter Thai Edition',NULL,NULL,7),(2,'2022-04-27 12:00:19','Holland','Jean Claude Van Gogh','Les tournesols, tournent et tournent...','La moitié de la fortune d\'Elon Musk',_binary '\0','Van Gogh\'s Sunflowers',NULL,NULL,9),(3,'2022-04-27 12:04:35','Space','Vanta','Sachez que cette couleurs est si noire qu\'elle récupère 99.999% des photons sans les relacher... Dommage qu\'elle soit sous brevet à cause d\'un égo.','Peanut',_binary '\0','The Bean of Blackness',NULL,NULL,11),(4,'2022-04-27 12:07:49','Matric','HakerNoNyMous','Les Années 2000 ne nous ont jamais quitté.','0.1 BTC',_binary '\0','La Quadrologie',NULL,NULL,9),(5,'2022-04-27 12:10:52','Internet','Geniuses','Il faut savoir accompagner les défunts comme s\'ils étaient vivants..','8000+',_binary '\0','Memes',NULL,NULL,9);
/*!40000 ALTER TABLE `artwork` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork_comments`
--

DROP TABLE IF EXISTS `artwork_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artwork_comments` (
  `artwork_id` bigint NOT NULL,
  `comments_id` bigint NOT NULL,
  UNIQUE KEY `UK_kn3bummee1i4h9g0l416vvkfl` (`comments_id`),
  KEY `FKbbmuu2k7d9osv6tspabo9yvfc` (`artwork_id`),
  CONSTRAINT `FK9pfd7cgc7e7n03d0y98lgfxea` FOREIGN KEY (`comments_id`) REFERENCES `comment` (`id`),
  CONSTRAINT `FKbbmuu2k7d9osv6tspabo9yvfc` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork_comments`
--

LOCK TABLES `artwork_comments` WRITE;
/*!40000 ALTER TABLE `artwork_comments` DISABLE KEYS */;
INSERT INTO `artwork_comments` VALUES (2,1);
/*!40000 ALTER TABLE `artwork_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork_photo`
--

DROP TABLE IF EXISTS `artwork_photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artwork_photo` (
  `artwork_id` bigint NOT NULL,
  `asset_id` bigint NOT NULL,
  PRIMARY KEY (`artwork_id`,`asset_id`),
  KEY `FK7jg2vak16t36l74hl3l5e9r9e` (`asset_id`),
  CONSTRAINT `FK7jg2vak16t36l74hl3l5e9r9e` FOREIGN KEY (`asset_id`) REFERENCES `asset` (`id`),
  CONSTRAINT `FK8prd9fpscgbvn1gqav7aia5eq` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork_photo`
--

LOCK TABLES `artwork_photo` WRITE;
/*!40000 ALTER TABLE `artwork_photo` DISABLE KEYS */;
INSERT INTO `artwork_photo` VALUES (1,1),(1,2),(1,3),(1,4),(2,5),(3,6),(4,7),(5,8);
/*!40000 ALTER TABLE `artwork_photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork_report`
--

DROP TABLE IF EXISTS `artwork_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artwork_report` (
  `id` bigint NOT NULL,
  `reported_artwork_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKj7cd0l2xq8uvo7fr5nj1eyov7` (`reported_artwork_id`),
  CONSTRAINT `FK5h0vkn8dvvvv8v5oxpf662y6j` FOREIGN KEY (`id`) REFERENCES `report` (`id`),
  CONSTRAINT `FKj7cd0l2xq8uvo7fr5nj1eyov7` FOREIGN KEY (`reported_artwork_id`) REFERENCES `artwork` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork_report`
--

LOCK TABLES `artwork_report` WRITE;
/*!40000 ALTER TABLE `artwork_report` DISABLE KEYS */;
/*!40000 ALTER TABLE `artwork_report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork_reports`
--

DROP TABLE IF EXISTS `artwork_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artwork_reports` (
  `artwork_id` bigint NOT NULL,
  `reports_id` bigint NOT NULL,
  UNIQUE KEY `UK_p8gjifgx6s1g4tg3eqy0dsi10` (`reports_id`),
  KEY `FK100tbu69bmi6sferkxgewyb1a` (`artwork_id`),
  CONSTRAINT `FK100tbu69bmi6sferkxgewyb1a` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`id`),
  CONSTRAINT `FKj6gnbksqlpym8mvvjx8cb9xmx` FOREIGN KEY (`reports_id`) REFERENCES `artwork_report` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork_reports`
--

LOCK TABLES `artwork_reports` WRITE;
/*!40000 ALTER TABLE `artwork_reports` DISABLE KEYS */;
/*!40000 ALTER TABLE `artwork_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork_tag`
--

DROP TABLE IF EXISTS `artwork_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artwork_tag` (
  `artwork_id` bigint NOT NULL,
  `tag_id` bigint NOT NULL,
  PRIMARY KEY (`artwork_id`,`tag_id`),
  KEY `FKhogsvtke0m46k4kjn37m2m53n` (`tag_id`),
  CONSTRAINT `FKhogsvtke0m46k4kjn37m2m53n` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`),
  CONSTRAINT `FKpc2rhbdklvohhewx36wr5ey23` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork_tag`
--

LOCK TABLES `artwork_tag` WRITE;
/*!40000 ALTER TABLE `artwork_tag` DISABLE KEYS */;
INSERT INTO `artwork_tag` VALUES (1,1),(1,2),(1,3),(1,4),(2,5),(2,6),(2,7),(2,8),(3,9),(4,9),(3,10),(3,11),(3,12),(4,13),(4,14),(4,15),(5,16),(5,17),(5,18),(5,19);
/*!40000 ALTER TABLE `artwork_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asset`
--

DROP TABLE IF EXISTS `asset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asset` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `path` varchar(255) DEFAULT NULL,
  `uploaded_on` datetime DEFAULT CURRENT_TIMESTAMP,
  `uploader_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_dmcsqdg0qbrbvi59pckmkdetk` (`path`),
  KEY `FKsync9k2o7ydhwnn76gh0f3b4t` (`uploader_id`),
  CONSTRAINT `FKsync9k2o7ydhwnn76gh0f3b4t` FOREIGN KEY (`uploader_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asset`
--

LOCK TABLES `asset` WRITE;
/*!40000 ALTER TABLE `asset` DISABLE KEYS */;
INSERT INTO `asset` VALUES (1,'https://pbs.twimg.com/media/EU9IGCxXgAIMmvm?format=jpg&name=medium','2022-04-27 11:52:38',7),(2,'https://pbs.twimg.com/media/EU9IJOgXQAUYoZ0?format=jpg&name=medium','2022-04-27 11:52:57',7),(3,'https://pbs.twimg.com/media/EU9IPP4XQAUg41S?format=jpg&name=large','2022-04-27 11:53:12',7),(4,'https://pbs.twimg.com/media/EU9IVbIXsAA7WWQ?format=jpg&name=medium','2022-04-27 11:53:35',7),(5,'https://wallup.net/wp-content/uploads/2016/01/49552-artwork-Vincent_van_Gogh-sunflowers-painting-classic_art.jpg','2022-04-27 12:01:54',9),(6,'https://www.theartgorgeous.com/wp-content/uploads/2017/08/01Vantablack_theartgorgeous.jpg','2022-04-27 12:04:59',11),(7,'https://media1.fdncms.com/stranger/imager/u/original/24707228/matrix.jpg','2022-04-27 12:08:11',9),(8,'https://everythingisviral.com/wp-content/uploads/2020/10/dance-meme.jpg','2022-04-27 12:11:50',9);
/*!40000 ALTER TABLE `asset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auction`
--

DROP TABLE IF EXISTS `auction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auction` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ends_on` datetime DEFAULT NULL,
  `starts_on` datetime DEFAULT NULL,
  `artwork_id` bigint DEFAULT NULL,
  `seller_id` bigint DEFAULT NULL,
  `status_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKenc0ybsriobn1b0nujm90mul` (`artwork_id`),
  KEY `FKf69hwkicisgydruy5wyyj02k1` (`seller_id`),
  KEY `FKj2648qlbpjm2r3q8mv2rknjgu` (`status_id`),
  CONSTRAINT `FKenc0ybsriobn1b0nujm90mul` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`id`),
  CONSTRAINT `FKf69hwkicisgydruy5wyyj02k1` FOREIGN KEY (`seller_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKj2648qlbpjm2r3q8mv2rknjgu` FOREIGN KEY (`status_id`) REFERENCES `auction_status` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auction`
--

LOCK TABLES `auction` WRITE;
/*!40000 ALTER TABLE `auction` DISABLE KEYS */;
/*!40000 ALTER TABLE `auction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auction_bids`
--

DROP TABLE IF EXISTS `auction_bids`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auction_bids` (
  `auction_id` bigint NOT NULL,
  `bids_id` bigint NOT NULL,
  UNIQUE KEY `UK_m8nxopdu3pyx1bhef9e7kklox` (`bids_id`),
  KEY `FKelru0tqde00w352c16j3sppgs` (`auction_id`),
  CONSTRAINT `FKecj7qg3qhy0xqlb2xmgg5rbo3` FOREIGN KEY (`bids_id`) REFERENCES `bid` (`id`),
  CONSTRAINT `FKelru0tqde00w352c16j3sppgs` FOREIGN KEY (`auction_id`) REFERENCES `auction` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auction_bids`
--

LOCK TABLES `auction_bids` WRITE;
/*!40000 ALTER TABLE `auction_bids` DISABLE KEYS */;
/*!40000 ALTER TABLE `auction_bids` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auction_status`
--

DROP TABLE IF EXISTS `auction_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auction_status` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `auction_status` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auction_status`
--

LOCK TABLES `auction_status` WRITE;
/*!40000 ALTER TABLE `auction_status` DISABLE KEYS */;
INSERT INTO `auction_status` VALUES (1,'AUCTION_OPEN'),(2,'AUCTION_CLOSED'),(3,'AUCTION_PENDING'),(4,'AUCTION_FUTURE'),(5,'AUCTION_CANCELLED');
/*!40000 ALTER TABLE `auction_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bid`
--

DROP TABLE IF EXISTS `bid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bid` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `bid_amount` double NOT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `auction_id` bigint DEFAULT NULL,
  `bidder_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhexc6i4j8i0tmpt8bdulp6g3g` (`auction_id`),
  KEY `FKlv3wvxwx62go8g98owtwcbf7k` (`bidder_id`),
  CONSTRAINT `FKhexc6i4j8i0tmpt8bdulp6g3g` FOREIGN KEY (`auction_id`) REFERENCES `auction` (`id`),
  CONSTRAINT `FKlv3wvxwx62go8g98owtwcbf7k` FOREIGN KEY (`bidder_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bid`
--

LOCK TABLES `bid` WRITE;
/*!40000 ALTER TABLE `bid` DISABLE KEYS */;
/*!40000 ALTER TABLE `bid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'CAT_PAINTING'),(2,'CAT_VIRTUAL'),(3,'CAT_SCULPTURE');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `created_on` datetime DEFAULT CURRENT_TIMESTAMP,
  `author_id` bigint DEFAULT NULL,
  `topic_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKh1gtv412u19wcbx22177xbkjp` (`author_id`),
  KEY `FKaga833b8u0etcpnope6lybp7` (`topic_id`),
  CONSTRAINT `FKaga833b8u0etcpnope6lybp7` FOREIGN KEY (`topic_id`) REFERENCES `artwork` (`id`),
  CONSTRAINT `FKh1gtv412u19wcbx22177xbkjp` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'Long Comment','2022-04-27 12:38:04',7,2);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment_report`
--

DROP TABLE IF EXISTS `comment_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_report` (
  `id` bigint NOT NULL,
  `reported_comment_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf6a4mkr1ulpfx1ot5onv053b7` (`reported_comment_id`),
  CONSTRAINT `FKf6a4mkr1ulpfx1ot5onv053b7` FOREIGN KEY (`reported_comment_id`) REFERENCES `comment` (`id`),
  CONSTRAINT `FKh3oebwqcrou3l5vm069vmlr8g` FOREIGN KEY (`id`) REFERENCES `report` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_report`
--

LOCK TABLES `comment_report` WRITE;
/*!40000 ALTER TABLE `comment_report` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment_report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (12);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kudos`
--

DROP TABLE IF EXISTS `kudos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kudos` (
  `artwork_id` bigint NOT NULL,
  `kudosing_user_id` bigint NOT NULL,
  KEY `FKbe03ftqrua86yxdyfkfa6qa6e` (`kudosing_user_id`),
  KEY `FK42rwfc29b82uclv3top135xu2` (`artwork_id`),
  CONSTRAINT `FK42rwfc29b82uclv3top135xu2` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`id`),
  CONSTRAINT `FKbe03ftqrua86yxdyfkfa6qa6e` FOREIGN KEY (`kudosing_user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kudos`
--

LOCK TABLES `kudos` WRITE;
/*!40000 ALTER TABLE `kudos` DISABLE KEYS */;
/*!40000 ALTER TABLE `kudos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profil`
--

DROP TABLE IF EXISTS `profil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profil` (
  `id` bigint NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `views` int NOT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK74sd0iwwpre0c3wk2ur5wjunt` (`user_id`),
  CONSTRAINT `FK74sd0iwwpre0c3wk2ur5wjunt` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profil`
--

LOCK TABLES `profil` WRITE;
/*!40000 ALTER TABLE `profil` DISABLE KEYS */;
/*!40000 ALTER TABLE `profil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `reason` varchar(255) DEFAULT NULL,
  `reporter_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKndpjl61ubcm2tkf7ml1ynq13t` (`reporter_id`),
  CONSTRAINT `FKndpjl61ubcm2tkf7ml1ynq13t` FOREIGN KEY (`reporter_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reset_request`
--

DROP TABLE IF EXISTS `reset_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reset_request` (
  `id` bigint NOT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK69y95fyxsi0e0x4vl1mf36lkp` (`user_id`),
  CONSTRAINT `FK69y95fyxsi0e0x4vl1mf36lkp` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset_request`
--

LOCK TABLES `reset_request` WRITE;
/*!40000 ALTER TABLE `reset_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `reset_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'ROLE_CUSTOMER'),(2,'ROLE_ADMIN'),(3,'ROLE_ARTIST'),(4,'ROLE_GALERY'),(5,'ROLE_MODERATOR');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `is_trigger` bit(1) DEFAULT NULL,
  `tag` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,_binary '\0','Illustrations'),(2,_binary '\0','Magic'),(3,_binary '\0','Fantasy'),(4,_binary '\0','RonEstSousEstimé'),(5,_binary '\0','Oil'),(6,_binary '\0','Very expensive'),(7,_binary '\0','Flowers'),(8,_binary '\0','Painting'),(9,_binary '\0','Vraiment?'),(10,_binary '\0','Sculpture'),(11,_binary '\0','Egocentrique'),(12,_binary '\0','Absurde'),(13,_binary '\0','Matrix'),(14,_binary '\0','Film'),(15,_binary '\0','S-F'),(16,_binary '\0','Astronomical'),(17,_binary '\0','Parfais'),(18,_binary '\0','Charité'),(19,_binary '\0','NFT');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `bought_on` datetime DEFAULT CURRENT_TIMESTAMP,
  `price` double NOT NULL,
  `artwork_id` bigint DEFAULT NULL,
  `buyer_id` bigint DEFAULT NULL,
  `owner_id` bigint DEFAULT NULL,
  `status_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhf77430rac4iojbpqtcxgupgn` (`artwork_id`),
  KEY `FKosd6qqlkyqp8gk4gjisggqev0` (`buyer_id`),
  KEY `FK4b7rbdeyj5iw6y3rt67suxs4n` (`owner_id`),
  KEY `FK87f60053qx9cfsc8n9kfu47r` (`status_id`),
  CONSTRAINT `FK4b7rbdeyj5iw6y3rt67suxs4n` FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK87f60053qx9cfsc8n9kfu47r` FOREIGN KEY (`status_id`) REFERENCES `transaction_status` (`id`),
  CONSTRAINT `FKhf77430rac4iojbpqtcxgupgn` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`id`),
  CONSTRAINT `FKosd6qqlkyqp8gk4gjisggqev0` FOREIGN KEY (`buyer_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction_status`
--

DROP TABLE IF EXISTS `transaction_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_status` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `transaction_status` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_status`
--

LOCK TABLES `transaction_status` WRITE;
/*!40000 ALTER TABLE `transaction_status` DISABLE KEYS */;
INSERT INTO `transaction_status` VALUES (1,'TRANSACTION_CANCELLED'),(2,'TRANSACTION_INCOMPLETE'),(3,'TRANSACTION_PENDING'),(4,'TRANSACTION_VALIDATED');
/*!40000 ALTER TABLE `transaction_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL,
  `is_verified` bit(1) NOT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `user_data_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6sou31qus5dnws6dwfu61e71v` (`mail`),
  UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`),
  KEY `FKkjrwwk4ag3bq7rvirdd2mk2eq` (`user_data_id`),
  CONSTRAINT `FKkjrwwk4ag3bq7rvirdd2mk2eq` FOREIGN KEY (`user_data_id`) REFERENCES `user_data` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (7,_binary '\0','karina@martynava.fr','$2a$10$GKNWpjqfFtoX937AOan3QOdlLNZUovINdrE5NPnJHQ/If1FaQKb4y','karina',6),(9,_binary '\0','thomas.commins1990@laposte.net','$2a$10$t/K6MklNylx5O5tNSaM6me/fh2wbyNZCVfCZ1xK0geVIffJApn6wu','thomas',8),(11,_binary '\0','admin@ktheo.com','$2a$10$8PYy7DJKRl5fI2owvi/dVeQ4lnFnTGq0Xe0vPKBKoL7NOclielSzG','octave',10);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_artworks`
--

DROP TABLE IF EXISTS `user_artworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_artworks` (
  `user_id` bigint NOT NULL,
  `artworks_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`artworks_id`),
  UNIQUE KEY `UK_8whme4gtvl2ijbgk83300wboc` (`artworks_id`),
  CONSTRAINT `FKgjr2ll1mbfhh4egiwxpal0j5f` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKk6mk3qpm1sgjhi9xu474why5g` FOREIGN KEY (`artworks_id`) REFERENCES `artwork` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_artworks`
--

LOCK TABLES `user_artworks` WRITE;
/*!40000 ALTER TABLE `user_artworks` DISABLE KEYS */;
INSERT INTO `user_artworks` VALUES (7,1),(9,2),(11,3),(9,4),(9,5);
/*!40000 ALTER TABLE `user_artworks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_assets`
--

DROP TABLE IF EXISTS `user_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_assets` (
  `user_id` bigint NOT NULL,
  `assets_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`assets_id`),
  UNIQUE KEY `UK_ngph7rpipgs59ps2i9jw7ifoc` (`assets_id`),
  CONSTRAINT `FKg5xgbj0o9clwgn8jdsa2qjhrm` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKnqxwgdcsauai3oc7brmptxs6w` FOREIGN KEY (`assets_id`) REFERENCES `asset` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_assets`
--

LOCK TABLES `user_assets` WRITE;
/*!40000 ALTER TABLE `user_assets` DISABLE KEYS */;
INSERT INTO `user_assets` VALUES (7,1),(7,2),(7,3),(7,4),(9,5),(11,6),(9,7),(9,8);
/*!40000 ALTER TABLE `user_assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_auctions`
--

DROP TABLE IF EXISTS `user_auctions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_auctions` (
  `user_id` bigint NOT NULL,
  `auctions_id` bigint NOT NULL,
  UNIQUE KEY `UK_gkj7p5ywuasoh744ph8mait8k` (`auctions_id`),
  KEY `FKmhdigynpw53bik7ln6fnvtc3` (`user_id`),
  CONSTRAINT `FKb10nfohjo508h34qcjitlqkwo` FOREIGN KEY (`auctions_id`) REFERENCES `auction` (`id`),
  CONSTRAINT `FKmhdigynpw53bik7ln6fnvtc3` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_auctions`
--

LOCK TABLES `user_auctions` WRITE;
/*!40000 ALTER TABLE `user_auctions` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_auctions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_bids`
--

DROP TABLE IF EXISTS `user_bids`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_bids` (
  `user_id` bigint NOT NULL,
  `bids_id` bigint NOT NULL,
  UNIQUE KEY `UK_rk4jig4hm9irni0u3tdxxvfhv` (`bids_id`),
  KEY `FKlskquv1qdwj4rjtwajhr238ll` (`user_id`),
  CONSTRAINT `FKjgfejuk0b6c5b2ldv9ogdbvlf` FOREIGN KEY (`bids_id`) REFERENCES `bid` (`id`),
  CONSTRAINT `FKlskquv1qdwj4rjtwajhr238ll` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_bids`
--

LOCK TABLES `user_bids` WRITE;
/*!40000 ALTER TABLE `user_bids` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_bids` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_comments`
--

DROP TABLE IF EXISTS `user_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_comments` (
  `user_id` bigint NOT NULL,
  `comments_id` bigint NOT NULL,
  UNIQUE KEY `UK_m7map903hqfosjlvugs90odp4` (`comments_id`),
  KEY `FKsarlnprddboaf4iekqmdgpfho` (`user_id`),
  CONSTRAINT `FKnccrlyd851u04nqll2fo9lyvj` FOREIGN KEY (`comments_id`) REFERENCES `comment` (`id`),
  CONSTRAINT `FKsarlnprddboaf4iekqmdgpfho` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_comments`
--

LOCK TABLES `user_comments` WRITE;
/*!40000 ALTER TABLE `user_comments` DISABLE KEYS */;
INSERT INTO `user_comments` VALUES (7,1);
/*!40000 ALTER TABLE `user_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_data`
--

DROP TABLE IF EXISTS `user_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_data` (
  `id` bigint NOT NULL,
  `birth_date` date DEFAULT NULL,
  `creation_date` date DEFAULT NULL,
  `facebook_link` varchar(255) DEFAULT NULL,
  `instagram_link` varchar(255) DEFAULT NULL,
  `last_seen` datetime DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  `tutorialized` bit(1) NOT NULL,
  `twitter_link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_data`
--

LOCK TABLES `user_data` WRITE;
/*!40000 ALTER TABLE `user_data` DISABLE KEYS */;
INSERT INTO `user_data` VALUES (6,NULL,'2022-04-27',NULL,NULL,'2022-04-27 11:43:55',NULL,_binary '\0',NULL),(8,NULL,'2022-04-27',NULL,NULL,'2022-04-27 11:44:06',NULL,_binary '\0',NULL),(10,NULL,'2022-04-27',NULL,NULL,'2022-04-27 11:44:39',NULL,_binary '\0',NULL);
/*!40000 ALTER TABLE `user_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_report`
--

DROP TABLE IF EXISTS `user_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_report` (
  `id` bigint NOT NULL,
  `reported_user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfu1jo7wwk0nhy4celx9viudvc` (`reported_user_id`),
  CONSTRAINT `FKfu1jo7wwk0nhy4celx9viudvc` FOREIGN KEY (`reported_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKlsecmdl0m0a1qx5jo1fq26unv` FOREIGN KEY (`id`) REFERENCES `report` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_report`
--

LOCK TABLES `user_report` WRITE;
/*!40000 ALTER TABLE `user_report` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  KEY `FKrhfovtciq1l558cw6udg0h0d3` (`role_id`),
  KEY `FK55itppkw3i07do3h7qoclqd4k` (`user_id`),
  CONSTRAINT `FK55itppkw3i07do3h7qoclqd4k` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKrhfovtciq1l558cw6udg0h0d3` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (7,1),(9,1),(11,1);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-27 12:52:00
