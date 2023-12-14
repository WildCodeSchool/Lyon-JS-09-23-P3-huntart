-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: artAndGo
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

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
-- Table structure for table `streetArt`
--

DROP TABLE IF EXISTS `streetArt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `streetArt` (
  `id` int NOT NULL,
  `name` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkImage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `streetArt`
--

LOCK TABLES `streetArt` WRITE;
/*!40000 ALTER TABLE `streetArt` DISABLE KEYS */;
INSERT INTO `streetArt` VALUES (1,'Cyber Coeur','Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_8bit_photo (1).jpg'),(2,'Thaï ta route','Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_8bit_photo (2).jpg'),(3,'Hop Bird','Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_8bit_photo (3).jpg'),(4,'8Boy','Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_8bit_photo.jpg'),(5,'Telethink Girl','Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_collage_photo.jpg'),(6,'Mathilde','Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_mosaic_photo (1).jpg'),(7,'Elina','Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_mosaic_photo (2).jpg'),(8,'Light Band','Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_video_game_photo.jpg');
/*!40000 ALTER TABLE `streetArt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `streetArt_Theme`
--

DROP TABLE IF EXISTS `streetArt_Theme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `streetArt_Theme` (
  `id` int NOT NULL,
  `streetArt_id` int DEFAULT NULL,
  `theme_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `streetArt_id` (`streetArt_id`),
  KEY `theme_id` (`theme_id`),
  CONSTRAINT `streetArt_Theme_ibfk_1` FOREIGN KEY (`streetArt_id`) REFERENCES `streetArt` (`id`),
  CONSTRAINT `streetArt_Theme_ibfk_2` FOREIGN KEY (`theme_id`) REFERENCES `theme` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `streetArt_Theme`
--

LOCK TABLES `streetArt_Theme` WRITE;
/*!40000 ALTER TABLE `streetArt_Theme` DISABLE KEYS */;
/*!40000 ALTER TABLE `streetArt_Theme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theme`
--

DROP TABLE IF EXISTS `theme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theme` (
  `id` int NOT NULL,
  `name` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkIco` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theme`
--

LOCK TABLES `theme` WRITE;
/*!40000 ALTER TABLE `theme` DISABLE KEYS */;
/*!40000 ALTER TABLE `theme` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-14 11:58:00
