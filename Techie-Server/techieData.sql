-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: techie_information
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `career_goal`
--

DROP TABLE IF EXISTS `career_goal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `career_goal` (
  `Career_GoalID` int NOT NULL,
  `FirstQuater` text,
  `SecondQuater` text,
  `ThirdQuater` text,
  `FourthQuater` text,
  `YearWins` text,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`Career_GoalID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `career_goal_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user_profile` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `career_goal`
--

LOCK TABLES `career_goal` WRITE;
/*!40000 ALTER TABLE `career_goal` DISABLE KEYS */;
/*!40000 ALTER TABLE `career_goal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `habit_tracker`
--

DROP TABLE IF EXISTS `habit_tracker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `habit_tracker` (
  `Habit_TrackerID` int NOT NULL,
  `ReadSomething` text,
  `PractiseCode` text,
  `WriteSomething` text,
  `CreatedAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`Habit_TrackerID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `habit_tracker_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user_profile` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habit_tracker`
--

LOCK TABLES `habit_tracker` WRITE;
/*!40000 ALTER TABLE `habit_tracker` DISABLE KEYS */;
/*!40000 ALTER TABLE `habit_tracker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile`
--

DROP TABLE IF EXISTS `user_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profile` (
  `UserID` int NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Surname` varchar(50) DEFAULT NULL,
  `Contact` varchar(12) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `PasswordHash` varchar(32) DEFAULT NULL,
  `RegisteredAt` datetime DEFAULT NULL,
  `Intro` tinytext,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `year_in_review`
--

DROP TABLE IF EXISTS `year_in_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `year_in_review` (
  `YearInReviewID` int NOT NULL,
  `Highlights` varchar(1000) DEFAULT NULL,
  `Lowlight` varchar(1000) DEFAULT NULL,
  `Needlights` varchar(1000) DEFAULT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`YearInReviewID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `year_in_review_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user_profile` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `year_in_review`
--

LOCK TABLES `year_in_review` WRITE;
/*!40000 ALTER TABLE `year_in_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `year_in_review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-17 11:42:45
