-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.18.04.1

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `refreshToken` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin','8C6976E5B5410415BDE908BD4DEE15DFB167A9C873FC4BB8A81F6F2AB448A918','8D969EEF6ECAD3C29A3A629280E686CF0C3F5D5A86AFF3CA12020C923ADC6C92');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `areas_conduct`
--

DROP TABLE IF EXISTS `areas_conduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `areas_conduct` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areas_conduct`
--

LOCK TABLES `areas_conduct` WRITE;
/*!40000 ALTER TABLE `areas_conduct` DISABLE KEYS */;
INSERT INTO `areas_conduct` VALUES (14,'Город'),(15,'Отель'),(16,'Природа'),(17,'Частная территория');
/*!40000 ALTER TABLE `areas_conduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (7,'Москва'),(8,'Санкт-Петербург'),(9,'Тбилиси'),(10,'Ереван'),(13,'Сочи'),(14,'Ярославль'),(15,'МО');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `CompanyTypeId` int(11) NOT NULL,
  `Denomination` varchar(255) NOT NULL,
  `Partner` bit(1) NOT NULL,
  `DiscountSize` int(11) NOT NULL DEFAULT '0',
  `Concurent` bit(1) DEFAULT NULL,
  `CountryId` int(11) DEFAULT NULL,
  `CityId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `company_fk1` (`CompanyTypeId`),
  KEY `user_fk1` (`UserId`),
  KEY `fk_company_1_idx` (`CountryId`),
  KEY `fk_company_2_idx` (`CityId`),
  CONSTRAINT `company_fk1` FOREIGN KEY (`CompanyTypeId`) REFERENCES `type_company` (`Id`),
  CONSTRAINT `fk_company_1` FOREIGN KEY (`CountryId`) REFERENCES `country` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_2` FOREIGN KEY (`CityId`) REFERENCES `city` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_fk1` FOREIGN KEY (`UserId`) REFERENCES `user` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (10,148,17,'Terralink',_binary '\0',0,_binary '\0',7,7),(11,150,9,'Раздача слонов',_binary '',0,_binary '\0',7,7),(12,154,17,'Cisco',_binary '\0',0,_binary '\0',7,7),(13,156,17,'Санофи',_binary '\0',0,_binary '\0',7,7),(14,157,16,'МТС',_binary '\0',0,_binary '\0',7,7),(15,158,10,'TUI',_binary '',5,_binary '\0',7,7),(16,160,17,'Норильский Никель',_binary '\0',0,_binary '\0',7,7),(17,162,9,'АРТ шоу центр',_binary '',5,_binary '\0',7,7),(18,164,9,'MarketEmotion',_binary '',5,_binary '\0',7,7),(19,167,16,'Кораблик',_binary '\0',0,_binary '\0',7,7),(20,168,11,'Maxmedium',_binary '\0',0,_binary '\0',7,7),(21,170,17,'МГУУ',_binary '\0',0,_binary '\0',7,7),(22,172,11,'FCM Travel Solutions',_binary '\0',0,_binary '\0',7,7),(23,175,9,'ISG',_binary '\0',0,_binary '\0',7,7),(24,176,17,'AbbVie',_binary '\0',0,_binary '\0',7,7),(25,178,9,'5 звезд',_binary '',5,_binary '\0',7,7),(26,181,17,'Петровак Фарм',_binary '\0',0,_binary '\0',NULL,NULL),(27,182,17,'GSK',_binary '\0',0,_binary '\0',7,7),(28,184,11,'UPJet',_binary '',10,_binary '\0',7,7),(29,187,9,'ARSCOM',_binary '\0',10,_binary '\0',7,7),(30,188,9,'OMG',_binary '\0',0,_binary '\0',7,7),(31,190,17,'Leroy Merlin Russia',_binary '\0',0,_binary '\0',7,7),(32,193,11,'MaxMedium',_binary '\0',0,_binary '\0',7,7),(33,194,11,'Випсервис (ВИП Корпорейт Тревел)',_binary '\0',0,_binary '\0',7,7),(34,197,17,'Hilti',_binary '\0',0,_binary '\0',7,7),(35,200,17,'ПАО \"ГАЗПРОМ НЕФТЬ\"',_binary '\0',0,NULL,7,8),(36,203,11,'АТН American Express GBT',_binary '\0',0,NULL,7,7),(37,204,9,'BrainingLab',_binary '\0',0,NULL,7,7),(38,207,17,'EveryCO',_binary '',0,_binary '\0',7,7),(39,211,17,'Softline',_binary '\0',0,_binary '\0',7,7),(40,213,9,'Михайлов и партнеры',_binary '',0,_binary '\0',7,7),(41,215,16,'DolphinGames',_binary '\0',0,_binary '\0',7,13),(42,218,16,'Exeltis',_binary '\0',0,NULL,NULL,NULL),(43,219,9,'Maximice',_binary '\0',0,NULL,7,7),(44,223,9,'Advanza Event Management',_binary '\0',0,NULL,NULL,NULL);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_department`
--

DROP TABLE IF EXISTS `company_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_department` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `CompanyId` int(11) NOT NULL,
  `DepartmentId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `company_fk4` (`CompanyId`),
  KEY `department_fk2` (`DepartmentId`),
  CONSTRAINT `company_fk4` FOREIGN KEY (`CompanyId`) REFERENCES `company` (`Id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `department_fk2` FOREIGN KEY (`DepartmentId`) REFERENCES `department` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_department`
--

LOCK TABLES `company_department` WRITE;
/*!40000 ALTER TABLE `company_department` DISABLE KEYS */;
INSERT INTO `company_department` VALUES (4,15,90),(5,30,91),(6,35,92),(7,35,93);
/*!40000 ALTER TABLE `company_department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_filial`
--

DROP TABLE IF EXISTS `company_filial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_filial` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `CompanyId` int(11) NOT NULL,
  `FilialId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `company_fk3` (`CompanyId`),
  KEY `filial_fk1` (`FilialId`),
  CONSTRAINT `company_fk3` FOREIGN KEY (`CompanyId`) REFERENCES `company` (`Id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `filial_fk1` FOREIGN KEY (`FilialId`) REFERENCES `filial` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_filial`
--

LOCK TABLES `company_filial` WRITE;
/*!40000 ALTER TABLE `company_filial` DISABLE KEYS */;
/*!40000 ALTER TABLE `company_filial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_manager`
--

DROP TABLE IF EXISTS `company_manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_manager` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `CompanyId` int(11) NOT NULL,
  `ManagerId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `company_fk2` (`CompanyId`),
  KEY `manager_fk3` (`ManagerId`),
  CONSTRAINT `company_fk2` FOREIGN KEY (`CompanyId`) REFERENCES `company` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `manager_fk3` FOREIGN KEY (`ManagerId`) REFERENCES `manager` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_manager`
--

LOCK TABLES `company_manager` WRITE;
/*!40000 ALTER TABLE `company_manager` DISABLE KEYS */;
INSERT INTO `company_manager` VALUES (4,10,6),(5,11,7),(6,12,8),(7,15,9),(8,17,11),(9,17,10),(10,18,12),(11,21,14),(12,20,15),(13,24,18),(14,25,20),(15,25,19),(16,27,21),(17,28,22),(18,29,23),(19,32,25),(20,32,26),(21,33,27),(22,34,28),(23,35,29),(24,36,31),(25,37,32),(26,23,33),(27,38,34),(28,33,35),(29,33,36),(30,39,37),(31,40,38),(32,41,39),(33,42,40),(34,43,41),(35,43,42),(36,44,43);
/*!40000 ALTER TABLE `company_manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_employee`
--

DROP TABLE IF EXISTS `contact_employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_employee` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `EmployeeId` int(11) NOT NULL,
  `ContactTypeId` int(11) NOT NULL,
  `Text` text NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `employee_fk6` (`EmployeeId`),
  KEY `type_contact_fk2` (`ContactTypeId`),
  CONSTRAINT `employee_fk6` FOREIGN KEY (`EmployeeId`) REFERENCES `employee` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `type_contact_fk2` FOREIGN KEY (`ContactTypeId`) REFERENCES `type_contact` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_employee`
--

LOCK TABLES `contact_employee` WRITE;
/*!40000 ALTER TABLE `contact_employee` DISABLE KEYS */;
INSERT INTO `contact_employee` VALUES (89,67,2,'test@mail.ru'),(90,68,1,'butterfly1301'),(91,69,2,'alex@i-s-group.ru'),(92,70,2,'finance@i-s-group.ru'),(93,71,2,'julia@i-s-group.ru'),(94,72,2,'sergey@i-s-group.ru'),(95,73,2,'georgy@i-s-group.ru'),(96,74,14,'+7 925 541-78-03'),(97,75,2,'artem@i-s-group.ru'),(98,76,14,'+7 916 635-77-57'),(99,76,14,'+7 916 635-77-57'),(100,77,14,'+7 916 862-36-14'),(101,78,2,'artur@i-s-group.ru');
/*!40000 ALTER TABLE `contact_employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_user`
--

DROP TABLE IF EXISTS `contact_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `ContactTypeId` int(11) NOT NULL,
  `Text` text NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `user_fk4` (`UserId`),
  KEY `type_contact_fk1` (`ContactTypeId`),
  CONSTRAINT `type_contact_fk1` FOREIGN KEY (`ContactTypeId`) REFERENCES `type_contact` (`Id`),
  CONSTRAINT `user_fk4` FOREIGN KEY (`UserId`) REFERENCES `user` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=222 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_user`
--

LOCK TABLES `contact_user` WRITE;
/*!40000 ALTER TABLE `contact_user` DISABLE KEYS */;
INSERT INTO `contact_user` VALUES (136,148,2,'ChashinaY@terralink.ru'),(137,149,2,'ChashinaY@terralink.ru'),(138,149,14,'+79165431887'),(139,150,2,'gala@razdachaslonov.com'),(140,151,14,'+7 926 007-00-30'),(141,151,2,'gala@razdachaslonov.com'),(143,153,2,'e.bahramova@gmail.com'),(144,153,14,'+7 926 908-95-74'),(145,153,2,'e.bahramova@gmail.com'),(146,153,14,'+7 926 908-95-74'),(147,154,2,'nzhukova@cisco.com'),(148,155,2,'nzhukova@cisco.com'),(149,155,14,'+7 964 5665444'),(150,159,2,'olga.semaforova@tui.ru'),(151,159,14,'+7 977 409-49-29'),(152,161,2,'v.bajenova@artshowcenter.ru'),(153,161,14,'+7 (925) 022-36-95'),(154,162,13,'+7 (495) 663-63-86'),(155,163,2,'u.tremaskina@artshowcenter.ru'),(156,165,2,'Sergunina@marketemotion.ru'),(157,165,14,'+7 (910) 420 10 26'),(158,166,2,'SidorovaTA@KORABLIK.ru'),(159,169,2,'zhurihin@me.com'),(160,169,14,'+79997719999'),(161,171,2,'l.vaganova@max-medium.ru'),(162,171,2,'l.vaganova@max-medium.ru'),(163,171,14,'+7 (903) 757 9719  '),(164,173,2,'maria.shishkina@ru.fcm.travel'),(165,174,2,'daria.avramenko@ru.fcm.travel'),(166,175,13,'+7(495)545-4195'),(167,177,14,' +7 9060698803'),(168,177,2,' anna.ezhkova@abbvie.com'),(169,179,2,'gorobets.e@5-stars.org'),(170,179,14,'7 985-123-82-39'),(171,180,2,'telepneva.o@5-stars.org'),(172,180,14,'+7 (926) 210-32-94'),(173,183,14,'+7 964 782 33 27'),(174,183,2,'anna.i.kuznetsova@gsk.com'),(175,185,2,'I.samotaeva@upjet.ru'),(176,185,14,'8 903 254 59 81'),(177,185,2,'I.samotaeva@upjet.ru'),(178,185,14,'8 903 254 59 81'),(179,186,14,' +79166742466'),(180,186,2,'bruman_e@arscom.ru '),(181,188,16,'www.omg-event.com '),(182,188,16,'www.omg-event.com '),(183,188,16,'www.omg-event.com '),(184,189,2,'a.antonova@omg-event.com'),(185,189,14,'79652411300'),(186,191,2,'a.makarova@max-medium.ru'),(187,192,2,'a.barabanova@max-medium.ru'),(188,195,2,'y.esipova@vipct.ru'),(189,195,14,'+7 (965) 128 43 99 '),(190,196,2,'Igor.Lisichenko@hilti.com'),(191,196,14,'+7 963 7594282'),(192,198,14,' +7 (916) 973-22-73'),(193,199,2,'Zuev.AM@gazprom-neft.ru'),(194,199,18,'Руководитель направления Управление развития и подготовки кадров'),(195,199,13,'тел: +7 (812) 363-3152 (доб. 1155)'),(196,199,14,'+7 92 99 32 77 37'),(197,201,2,'mizonovav@list.ru'),(198,201,14,'+79260015074'),(199,202,2,'AChernyateva@ath.ru'),(200,202,14,'+7 926 2052563'),(201,202,18,'1'),(202,205,2,'ov@braininglab.ru'),(203,205,14,'+7 (903) 189-86-30'),(204,205,18,'Producer'),(205,205,18,'Producer Producer'),(206,206,2,'alex@i-s-group.ru'),(207,207,13,'+7 (495) 363-61-61'),(208,208,2,'v.kichaykina@everyco.ru'),(209,209,2,'volkswagen@vipct.ru'),(210,210,2,'a.sogomonova@vipct.ru'),(211,210,13,'(495) 626 47 74 доб|ext. 2020 '),(212,212,2,'email@softline.com'),(213,213,13,'+7 (495) 748-59-77'),(214,214,14,'+7 (903) 580 80 60'),(215,216,2,'daria.matveyeva@dolphingames.ru'),(216,216,14,' +7 985 760 52 01'),(217,217,2,'s.geraskina@gmail.com'),(218,220,2,'Elena.Frolova@maximice.ru'),(219,221,2,'Emma.Bondarovich@maximice.ru'),(220,222,2,'artem@i-s-group.ru'),(221,224,14,'+7(921) 875-75-77');
/*!40000 ALTER TABLE `contact_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `country` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (7,'Россия'),(8,'Грузия'),(9,'Казахстан'),(10,'Армения'),(11,'Азербайджан');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cyclical_project`
--

DROP TABLE IF EXISTS `cyclical_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cyclical_project` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cyclical_project`
--

LOCK TABLES `cyclical_project` WRITE;
/*!40000 ALTER TABLE `cyclical_project` DISABLE KEYS */;
INSERT INTO `cyclical_project` VALUES (13,'Не определён'),(14,'Разовое мероприятие'),(15,'Ежемесячное мероприятие'),(16,'Полугодовое мероприятие'),(17,'Ежегодное мероприятие'),(18,'Другое');
/*!40000 ALTER TABLE `cyclical_project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (69,'Event'),(70,'Digital'),(90,'MICE'),(91,'Project Department'),(92,'Корпоративный университет'),(93,'Дирекция по организационному развитию и работе с персоналом');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department_manager`
--

DROP TABLE IF EXISTS `department_manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department_manager` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `DepartmentId` int(11) NOT NULL,
  `ManagerId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `department_fk3` (`DepartmentId`),
  KEY `manager_fk5` (`ManagerId`),
  CONSTRAINT `department_fk3` FOREIGN KEY (`DepartmentId`) REFERENCES `department` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `manager_fk5` FOREIGN KEY (`ManagerId`) REFERENCES `manager` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department_manager`
--

LOCK TABLES `department_manager` WRITE;
/*!40000 ALTER TABLE `department_manager` DISABLE KEYS */;
INSERT INTO `department_manager` VALUES (1,90,9),(2,91,24),(3,92,29),(4,93,44);
/*!40000 ALTER TABLE `department_manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Surname` varchar(255) NOT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `PositionId` int(11) NOT NULL,
  `Parol` varchar(255) NOT NULL,
  `refreshToken` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Username_UNIQUE` (`Username`),
  KEY `PositionId` (`PositionId`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`PositionId`) REFERENCES `position_employees` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (67,'User','Test','1539438904282.png','test','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',8,'123','ccdb31fc82cb1e3956f1d021d052f6319e7c9fa2d186941ae248f1c43d3f8541'),(68,'Анна','Цой','1539439021601.jpeg','anna.tsoy','7f92063f461ca1991c0f734dca11d2c98d30e14f08c0e5a7f8e631eca3bc1b52',16,'anna123','ccdb31fc82cb1e3956f1d021d052f6319e7c9fa2d186941ae248f1c43d3f8541'),(69,'Александр','Садовой','1539879746140.jpeg','sadovoy','e964c080615d3482a444ee23660b1f9673d523a4dee42d30b34d8c5f1a5147d0',17,'alexandr123','7454818ae3862ce059466f8620844d48d9aa091664461dbbe7fa4b9b078a81ad'),(70,'Алла','Косарева','1539879942994.jpeg','kosareva','8359f7af7400bbbb0d02a778524e9e98966bfd9951759771b8bf526a6cd9c254',14,'alla123','7454818ae3862ce059466f8620844d48d9aa091664461dbbe7fa4b9b078a81ad'),(71,'Юлия','Мишина','1539880077984.jpeg','mishina','83ebbaad1080c30f9fef541b4d61d7eadbe3f3dcdd2e1b7420ab35685c8d7187',8,'Julia123','7454818ae3862ce059466f8620844d48d9aa091664461dbbe7fa4b9b078a81ad'),(72,'Сергей','Кулешов','1539880204679.jpeg','kuleshov','f3a08382ce7659823189350f0c715a7b5cb2d915b2c5d2360dc06f6d087c7431',9,'sergey123','7454818ae3862ce059466f8620844d48d9aa091664461dbbe7fa4b9b078a81ad'),(73,'Георгий','Борщев','1539880319907.jpeg','borshev','f09573057b634c2b237fe4dc3a2cfff8f1fa781497807954052b47c5bf26856a',8,'georgiy123','7454818ae3862ce059466f8620844d48d9aa091664461dbbe7fa4b9b078a81ad'),(74,'Евгения','Ткалич','1539880907332.jpeg','tkalich','6d54783fea3481bcea9907a7bf5cfae1bd3359dbabb3545d2707e9c330f6d94f',9,'evgenia123','7454818ae3862ce059466f8620844d48d9aa091664461dbbe7fa4b9b078a81ad'),(75,'Артем','Храпов','1539881024200.jpeg','khrapov','43073c975ad5e0b52d0952ae2a2132dfa9ea907a47f42a885e4c3023691388cd',10,'artem123','7454818ae3862ce059466f8620844d48d9aa091664461dbbe7fa4b9b078a81ad'),(76,'Анна','Воинова','1539881249024.png','voinova','7f92063f461ca1991c0f734dca11d2c98d30e14f08c0e5a7f8e631eca3bc1b52',11,'anna123','7454818ae3862ce059466f8620844d48d9aa091664461dbbe7fa4b9b078a81ad'),(77,'Вика','Егорова','1539881416629.jpeg','egorova','e95362ef6154b55ce07a1fcf98f42817f14d1b2fc8c5133e949fbe61209b1a65',15,'vika123','7454818ae3862ce059466f8620844d48d9aa091664461dbbe7fa4b9b078a81ad'),(78,'Артур','Петросян','1539881813856.jpeg','petrosyan','f23a0ae627d636432f2c90a1531f39b6e8f1d8db9e58bd9d4372861fc0426e41',10,'artur123','7454818ae3862ce059466f8620844d48d9aa091664461dbbe7fa4b9b078a81ad');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_role`
--

DROP TABLE IF EXISTS `employee_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee_role` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `RoleId` int(11) NOT NULL,
  `EmployeeId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `role_fk1` (`RoleId`),
  KEY `employee_fk1` (`EmployeeId`),
  CONSTRAINT `employee_fk1` FOREIGN KEY (`EmployeeId`) REFERENCES `employee` (`Id`),
  CONSTRAINT `role_fk1` FOREIGN KEY (`RoleId`) REFERENCES `role` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_role`
--

LOCK TABLES `employee_role` WRITE;
/*!40000 ALTER TABLE `employee_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filial`
--

DROP TABLE IF EXISTS `filial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filial` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filial`
--

LOCK TABLES `filial` WRITE;
/*!40000 ALTER TABLE `filial` DISABLE KEYS */;
/*!40000 ALTER TABLE `filial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filial_department`
--

DROP TABLE IF EXISTS `filial_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filial_department` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `DepartmentId` int(11) NOT NULL,
  `FilialId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `department_fk1` (`DepartmentId`),
  KEY `filial_fk2` (`FilialId`),
  CONSTRAINT `department_fk1` FOREIGN KEY (`DepartmentId`) REFERENCES `department` (`Id`),
  CONSTRAINT `filial_fk2` FOREIGN KEY (`FilialId`) REFERENCES `filial` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filial_department`
--

LOCK TABLES `filial_department` WRITE;
/*!40000 ALTER TABLE `filial_department` DISABLE KEYS */;
/*!40000 ALTER TABLE `filial_department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filial_manager`
--

DROP TABLE IF EXISTS `filial_manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filial_manager` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FilialId` int(11) NOT NULL,
  `ManagerId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `filial_fk3` (`FilialId`),
  KEY `manager_fk4` (`ManagerId`),
  CONSTRAINT `filial_fk3` FOREIGN KEY (`FilialId`) REFERENCES `filial` (`Id`),
  CONSTRAINT `manager_fk4` FOREIGN KEY (`ManagerId`) REFERENCES `manager` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filial_manager`
--

LOCK TABLES `filial_manager` WRITE;
/*!40000 ALTER TABLE `filial_manager` DISABLE KEYS */;
/*!40000 ALTER TABLE `filial_manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `format_project`
--

DROP TABLE IF EXISTS `format_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `format_project` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `format_project`
--

LOCK TABLES `format_project` WRITE;
/*!40000 ALTER TABLE `format_project` DISABLE KEYS */;
INSERT INTO `format_project` VALUES (8,'Не определён'),(28,'Квест FUN'),(29,'Квест Training'),(30,'Квест Business'),(31,'Квиз'),(32,'Тимбилдинг'),(33,'Тренинг'),(34,'Бизнес-игра'),(35,'Бизнес-симуляция'),(36,'Тест-драйв'),(37,'Мобильное приложение'),(38,'Сайт'),(39,'Регистрация'),(40,'Полный цикл'),(41,'Комбинированный'),(42,'Интуиция'),(43,'Дум-дум'),(44,'Разработка'),(45,'Комнаты'),(46,'Travel administrator'),(48,'Round table assistant'),(49,'Интерактивная экскурсия'),(50,'Другое');
/*!40000 ALTER TABLE `format_project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `indoor_outdoor`
--

DROP TABLE IF EXISTS `indoor_outdoor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `indoor_outdoor` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `indoor_outdoor`
--

LOCK TABLES `indoor_outdoor` WRITE;
/*!40000 ALTER TABLE `indoor_outdoor` DISABLE KEYS */;
INSERT INTO `indoor_outdoor` VALUES (1,'индор'),(2,'аутдор'),(3,'обе');
/*!40000 ALTER TABLE `indoor_outdoor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manager` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Surname` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `user_fk2` (`UserId`),
  CONSTRAINT `user_fk2` FOREIGN KEY (`UserId`) REFERENCES `user` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES (6,'Юлия','Чашина','lastname',149),(7,'Галина','Пажитных','last',151),(8,'Наталия','Жукова','lastname',155),(9,'Ольга','Семафорова','last',159),(10,'Вероника','Баженова','lastname',161),(11,'Юлия','Тремаскина','lastname',163),(12,'Алина','Сергунина','lastname',165),(13,'Татьяна','Сидорова','last',166),(14,'Сергей','Журихин','lastname',169),(15,'Лусине','Ваганова','last',171),(16,'Мария','Шишкина','lastname',173),(17,'Дарья','Авраменко','last',174),(18,'Анна','Григорьева','lastname',177),(19,'Елена','Горобец','lastname',179),(20,'Ольга','Телепнева','lastname',180),(21,'Анна','Кузнецова','lastname',183),(22,'Ирина','Самотаева','lastname',185),(23,'Елена','Бруман','lastname',186),(24,'Анна','Антонова','lastname',189),(25,'Анастасия','Макарова','lastname',191),(26,'Анна','Барабанова','lastname',192),(27,'Юлиана','Есипова','lastname',195),(28,'Игорь','Лисиченко','lastname',196),(29,'Алексей','Зуев','lastname',199),(30,'Вера','Мизонова','lastname',201),(31,'Алёна','Chernyateva','last',202),(32,'Ольга','Варнакова','lastname',205),(33,'Александр','Садовой','lastname',206),(34,'Виктория ','Кичайкина','lastname',208),(35,'Софья ','Снегирева ','lastname',209),(36,'Анна','Согомонова','lastname',210),(37,'Менеджер','Софтлайн','lastname',212),(38,'Анастасия','Фролова','lastname',214),(39,'Дарья','Матвеева','lastname',216),(40,'Светлана','Гераскина','lastname',217),(41,'Елена','Зубова','lastname',220),(42,'Эмма','Бондарович','lastname',221),(43,'Алексей','Монченко','lastname',222),(44,'Алёна','Канцевая','lastname',224);
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pay_method`
--

DROP TABLE IF EXISTS `pay_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pay_method` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pay_method`
--

LOCK TABLES `pay_method` WRITE;
/*!40000 ALTER TABLE `pay_method` DISABLE KEYS */;
INSERT INTO `pay_method` VALUES (1,'Наличные'),(2,'По счету'),(3,'Не определен');
/*!40000 ALTER TABLE `pay_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `position_employees`
--

DROP TABLE IF EXISTS `position_employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `position_employees` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position_employees`
--

LOCK TABLES `position_employees` WRITE;
/*!40000 ALTER TABLE `position_employees` DISABLE KEYS */;
INSERT INTO `position_employees` VALUES (8,'PM'),(9,'Сценарист'),(10,'Digital-менеджер'),(11,'copy-writer'),(13,'Sale'),(14,'Финансовый директор'),(15,'Офис менеджер'),(16,'Руководитель ивент направления'),(17,'Генеральный директор');
/*!40000 ALTER TABLE `position_employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Number` varchar(30) NOT NULL,
  `StatusId` int(11) DEFAULT NULL,
  `FormatId` int(11) NOT NULL,
  `Tender` bit(1) NOT NULL DEFAULT b'0',
  `CyclicityId` int(11) NOT NULL,
  `ClientDepartmentId` int(11) DEFAULT NULL,
  `ClientId` int(11) DEFAULT NULL,
  `CustomerId` int(11) NOT NULL,
  `SaleTypeId` int(11) NOT NULL,
  `ProjectTypeId` int(11) NOT NULL,
  `ProjectTaskId` int(11) DEFAULT NULL,
  `RequestDate` date DEFAULT NULL,
  `ProjectFinishDate` date DEFAULT NULL,
  `Projectdate` text,
  `ProjectDuration` int(11) DEFAULT NULL,
  `FollowUp` date DEFAULT NULL,
  `SaleManagerId` int(11) DEFAULT NULL,
  `ManagerProjectId` int(11) DEFAULT NULL,
  `DigitalManagerId` int(11) DEFAULT NULL,
  `ScreenWriterId` int(11) DEFAULT NULL,
  `BudgetForClient` int(11) DEFAULT NULL,
  `Budget` int(11) DEFAULT NULL,
  `PayMethodId` int(11) DEFAULT NULL,
  `CountryId` int(11) DEFAULT NULL,
  `CityId` int(11) DEFAULT NULL,
  `AreaId` int(11) DEFAULT NULL,
  `IndoorOutdoorId` int(11) DEFAULT NULL,
  `CountParticipants` int(4) NOT NULL,
  `Comment` text,
  `ClientFilialId` int(11) DEFAULT NULL,
  `ClientMainManagerId` int(11) DEFAULT NULL,
  `CustomerMainManagerId` int(11) DEFAULT NULL,
  `CustomerFilialId` int(11) DEFAULT NULL,
  `CustomerDepartmentId` int(11) DEFAULT NULL,
  `DepartmentId` int(11) DEFAULT NULL,
  `GeneralProjectId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Number` (`Number`),
  KEY `status_fk1` (`StatusId`),
  KEY `format_fk1` (`FormatId`),
  KEY `cyclicity_fk1` (`CyclicityId`),
  KEY `department_fk4` (`ClientDepartmentId`),
  KEY `company_fk5` (`ClientId`),
  KEY `company_fk6` (`CustomerId`),
  KEY `type_sale_fk1` (`SaleTypeId`),
  KEY `type_project_fk1` (`ProjectTypeId`),
  KEY `project_task_fk1` (`ProjectTaskId`),
  KEY `employee_fk2` (`SaleManagerId`),
  KEY `employee_fk3` (`ManagerProjectId`),
  KEY `employee_fk4` (`DigitalManagerId`),
  KEY `employee_fk5` (`ScreenWriterId`),
  KEY `pay_method_fk1` (`PayMethodId`),
  KEY `country_fk1` (`CountryId`),
  KEY `city_fk1` (`CityId`),
  KEY `areas_conduct_fk1` (`AreaId`),
  KEY `indoor_outdoor_fk1` (`IndoorOutdoorId`),
  KEY `fk_project_1_idx` (`ClientMainManagerId`),
  KEY `fk_project_4_idx` (`ClientFilialId`),
  KEY `fk_project_12_idx` (`ClientMainManagerId`),
  KEY `fk_project_44_idx` (`ClientFilialId`),
  KEY `fk_project_3_idx` (`CustomerMainManagerId`),
  KEY `fk_project_4_idx1` (`CustomerDepartmentId`),
  KEY `fk_project_5_idx` (`DepartmentId`),
  KEY `fk_project_6_idx` (`GeneralProjectId`),
  CONSTRAINT `areas_conduct_fk1` FOREIGN KEY (`AreaId`) REFERENCES `areas_conduct` (`Id`),
  CONSTRAINT `city_fk1` FOREIGN KEY (`CityId`) REFERENCES `city` (`Id`),
  CONSTRAINT `company_fk5` FOREIGN KEY (`ClientId`) REFERENCES `company` (`Id`),
  CONSTRAINT `company_fk6` FOREIGN KEY (`CustomerId`) REFERENCES `company` (`Id`),
  CONSTRAINT `country_fk1` FOREIGN KEY (`CountryId`) REFERENCES `country` (`Id`),
  CONSTRAINT `cyclicity_fk1` FOREIGN KEY (`CyclicityId`) REFERENCES `cyclical_project` (`Id`),
  CONSTRAINT `department_fk4` FOREIGN KEY (`ClientDepartmentId`) REFERENCES `department` (`Id`),
  CONSTRAINT `employee_fk2` FOREIGN KEY (`SaleManagerId`) REFERENCES `employee` (`Id`),
  CONSTRAINT `employee_fk3` FOREIGN KEY (`ManagerProjectId`) REFERENCES `employee` (`Id`),
  CONSTRAINT `employee_fk4` FOREIGN KEY (`DigitalManagerId`) REFERENCES `employee` (`Id`),
  CONSTRAINT `employee_fk5` FOREIGN KEY (`ScreenWriterId`) REFERENCES `employee` (`Id`),
  CONSTRAINT `fk_project_1` FOREIGN KEY (`ClientMainManagerId`) REFERENCES `manager` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_2` FOREIGN KEY (`ClientFilialId`) REFERENCES `filial` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_3` FOREIGN KEY (`CustomerMainManagerId`) REFERENCES `manager` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_4` FOREIGN KEY (`CustomerDepartmentId`) REFERENCES `department` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_5` FOREIGN KEY (`DepartmentId`) REFERENCES `department` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_6` FOREIGN KEY (`GeneralProjectId`) REFERENCES `project` (`Id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `format_fk1` FOREIGN KEY (`FormatId`) REFERENCES `format_project` (`Id`),
  CONSTRAINT `indoor_outdoor_fk1` FOREIGN KEY (`IndoorOutdoorId`) REFERENCES `indoor_outdoor` (`Id`),
  CONSTRAINT `pay_method_fk1` FOREIGN KEY (`PayMethodId`) REFERENCES `pay_method` (`Id`),
  CONSTRAINT `project_task_fk1` FOREIGN KEY (`ProjectTaskId`) REFERENCES `project_task` (`Id`),
  CONSTRAINT `status_fk1` FOREIGN KEY (`StatusId`) REFERENCES `status_project` (`Id`),
  CONSTRAINT `type_project_fk1` FOREIGN KEY (`ProjectTypeId`) REFERENCES `type_project` (`Id`),
  CONSTRAINT `type_sale_fk1` FOREIGN KEY (`SaleTypeId`) REFERENCES `type_sale` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (10,'Яндекс.Квест','2018_217',52,28,_binary '',14,NULL,11,11,7,17,11,'2018-10-08','2018-10-08','2018-11-16,',2,'2018-10-15',73,73,NULL,NULL,750000,10,2,7,7,14,1,5000,NULL,NULL,7,7,NULL,NULL,69,NULL),(11,'Корп Новый год','2018_E_219',NULL,50,_binary '',17,NULL,10,10,8,19,11,'2018-10-05','2018-10-12','2018-12-26,',6,'2018-10-12',68,68,NULL,NULL,2300000,2000000,2,7,7,14,1,300,NULL,NULL,6,6,NULL,NULL,69,NULL),(14,'Cisco Partner boot camp','2018_E_230',49,34,_binary '',17,NULL,12,12,8,18,11,'2018-10-10','2018-10-15','2018-11-29,2018-11-30',48,'2018-10-17',68,71,NULL,NULL,600000,400000,2,7,7,15,1,100,NULL,NULL,8,8,NULL,NULL,69,NULL),(15,'МТС Герои продаж','2018_E_233',57,28,_binary '',13,NULL,14,15,9,17,9,'2018-10-08','2018-10-15','2018-11-21,2018-11-21',48,'2018-10-18',68,73,NULL,NULL,310300,1800000,2,7,NULL,NULL,NULL,504,NULL,NULL,NULL,9,NULL,NULL,69,NULL),(16,'Декабрь_Нор никель_Блок GR','2018_E_234',49,31,_binary '',13,NULL,16,17,8,18,9,'2018-11-02','2018-11-06','2018-12-11,2018-12-12',4,'2018-11-09',68,73,NULL,NULL,200000,60000,2,7,NULL,NULL,NULL,60,NULL,NULL,NULL,10,NULL,NULL,69,NULL),(17,'Ноябрь_НорНикель_150чел','2018_E_235',57,31,_binary '',13,NULL,16,17,8,18,9,'2018-11-02','2018-11-03','2018-11-14',4,'2018-11-14',68,71,NULL,NULL,200000,60000,2,7,NULL,15,1,150,NULL,NULL,NULL,11,NULL,NULL,69,NULL),(18,'Санофи_Цикловое совещание','2018_E_236',49,50,_binary '',17,NULL,13,18,8,17,9,'2018-10-25','2018-10-25','2019-01-27,2019-01-28,2019-11-29,2019-02-01',96,'2018-11-01',68,73,NULL,NULL,500000,100000,2,7,7,15,1,500,NULL,NULL,NULL,12,NULL,NULL,69,NULL),(19,'МЕА_САНОФИ','2018_D_237',57,8,_binary '',13,NULL,NULL,20,7,16,NULL,'2018-11-09',NULL,'2019-01-25',NULL,'2018-11-21',69,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1300,NULL,NULL,NULL,15,NULL,NULL,70,NULL),(20,'МГУУ_Юристы_NY_150ppl','2018_E_237',52,40,_binary '',13,NULL,21,21,8,18,9,'2018-10-22','2018-11-05','2018-12-03',6,'2018-10-29',68,71,NULL,NULL,2000000,1500000,2,7,7,15,1,150,NULL,NULL,14,14,NULL,NULL,69,NULL),(21,'Детский НГ в офисе','2018_E_239',49,40,_binary '',17,NULL,24,24,8,18,9,'2018-10-26','2018-11-06','2018-12-21',4,'2018-11-02',71,71,NULL,NULL,600000,550000,2,7,7,17,1,60,NULL,NULL,18,18,NULL,NULL,69,NULL),(22,'Тимбилдинг для Петровак Фарм','2018_E_240',49,32,_binary '',13,NULL,26,25,6,18,11,'2018-11-09','2018-11-09','2018-12-06,2018-12-07',48,'2018-11-16',68,73,NULL,NULL,NULL,NULL,NULL,7,7,15,1,45,NULL,NULL,NULL,20,NULL,NULL,69,NULL),(23,'Цикловое совещание GSK','2018_E_241',49,32,_binary '',17,NULL,27,28,6,18,9,'2018-11-08','2018-11-09','2019-02-06',4,'2018-11-15',68,73,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,500,NULL,NULL,21,22,NULL,NULL,69,NULL),(24,'Башня_Сочи_GSK','2018_E_242',52,32,_binary '',13,NULL,27,28,6,18,9,'2018-11-08','2018-11-09','2018-12-18',6,'2018-11-15',68,73,NULL,NULL,1350000,720000,2,7,NULL,NULL,1,500,NULL,NULL,21,22,NULL,NULL,69,NULL),(25,'Квест для ARSCOM','2018_E_243',NULL,28,_binary '',13,NULL,NULL,29,6,16,NULL,'2018-11-13',NULL,'2018-12-26',NULL,'2018-11-20',68,68,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,400,NULL,NULL,NULL,23,NULL,NULL,69,NULL),(26,'МП Код руководителя','2018_D_244',46,44,_binary '',13,NULL,35,35,9,16,11,'2018-11-15',NULL,'2019-02-01',NULL,'2018-11-22',69,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,300,NULL,NULL,NULL,29,NULL,NULL,70,NULL),(27,'MICE TOOL поддержка','2018_D_245',52,46,_binary '',18,NULL,NULL,32,8,16,11,'2018-01-01','2018-01-01','2018-12-31',NULL,'2018-01-08',69,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,25,NULL,NULL,70,NULL),(28,'Sanofi Winter Cycle Meeting 2019','2018_D_246',52,46,_binary '',13,NULL,NULL,32,8,16,11,'2018-10-01',NULL,'2019-01-25',NULL,'2018-10-08',75,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,25,NULL,NULL,70,27),(29,'МП Medlab ФЛМ','2018_56',54,50,_binary '',13,NULL,NULL,36,6,16,11,'2018-02-26',NULL,'2018-05-30',NULL,'2018-03-05',69,75,NULL,NULL,NULL,NULL,NULL,7,NULL,NULL,1,150,NULL,NULL,NULL,31,NULL,NULL,70,NULL),(30,'МП Hilti','2018_20',54,37,_binary '',13,NULL,NULL,37,7,16,NULL,'2018-01-12',NULL,'2018-01-29',NULL,'2018-01-19',71,75,NULL,NULL,NULL,NULL,NULL,7,NULL,NULL,1,900,NULL,NULL,NULL,32,NULL,NULL,70,NULL),(31,'Химия отношений (презент. игры)','2018_E_249',52,8,_binary '',14,NULL,23,23,14,20,11,'2018-10-30','2018-11-01','2018-11-14',NULL,'2018-11-06',73,73,NULL,NULL,NULL,NULL,NULL,7,7,14,1,40,NULL,NULL,33,33,NULL,NULL,69,NULL),(32,'Башня_EveryCo','2018_215',52,32,_binary '',14,NULL,NULL,38,7,19,9,'2018-10-01','2018-10-11','2018-12-07',3,'2018-10-08',73,73,NULL,NULL,NULL,NULL,2,7,7,15,1,180,NULL,NULL,NULL,34,NULL,NULL,69,NULL),(33,'Квиз_Volkswagen','2018_E_251',52,31,_binary '',14,NULL,33,33,6,19,9,'2018-10-08','2018-10-10','2018-12-07',2,'2018-10-15',73,73,NULL,NULL,NULL,NULL,2,7,7,14,1,64,NULL,NULL,35,35,NULL,NULL,69,NULL),(34,'МП_Сандоз','2019_D_139',57,37,_binary '',18,NULL,NULL,33,6,16,NULL,'2018-11-23',NULL,'2019-02-01',NULL,'2018-12-05',69,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,36,NULL,NULL,70,NULL),(35,'МП_Софтлайн','2019_D_140',46,37,_binary '',13,NULL,NULL,39,8,16,NULL,'2018-11-26','2018-11-29','2019-02-01',NULL,'2018-12-03',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,300,NULL,NULL,NULL,37,NULL,NULL,70,NULL),(36,'Техноград_День_Без_Т','2018_E_254',52,28,_binary '',18,NULL,40,40,6,19,7,'2018-11-01','2018-11-15','2018-12-08',5,'2018-11-08',73,73,NULL,NULL,800000,NULL,2,7,7,14,1,192,NULL,NULL,38,38,NULL,NULL,69,NULL),(37,'ГПН_Звёзды БРД','2019_D_142',49,8,_binary '',13,NULL,NULL,41,6,16,NULL,'2018-11-28','2018-11-30','2019-02-01',NULL,'2018-12-05',69,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,30,NULL,NULL,NULL,39,NULL,NULL,70,NULL),(38,'ISG_digital-dept','2018_216',52,8,_binary '',13,NULL,NULL,23,8,16,NULL,'2018-12-03',NULL,'2018-12-03',NULL,'2018-12-10',69,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,33,NULL,NULL,70,NULL),(39,'ИС_Recordati','2019_D_144',46,38,_binary '',13,NULL,NULL,25,7,16,11,'2018-12-06','2018-12-07','2019-01-28',NULL,'2018-12-13',69,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,220,NULL,NULL,NULL,20,NULL,NULL,70,NULL),(40,'ИС_Exeltis','2019_D_145',NULL,8,_binary '',13,NULL,NULL,42,6,16,NULL,'2018-12-07','2018-12-11','2019-01-10',NULL,'2018-12-14',69,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,70,NULL,NULL,NULL,40,NULL,NULL,70,NULL),(41,'MEA_МСД_фарма','2019_D_146',49,37,_binary '',13,NULL,NULL,43,6,16,NULL,'2018-12-05','2018-12-07','2019-02-03',NULL,'2018-12-12',69,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,590,NULL,NULL,NULL,42,NULL,NULL,70,NULL),(42,'MEA+ИС_Сбербанк конференция','2019_D_147',NULL,8,_binary '',13,NULL,NULL,44,6,16,NULL,'2018-10-16','2018-10-19','2019-02-02',NULL,'2018-10-23',69,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1200,NULL,NULL,NULL,43,NULL,NULL,70,NULL),(43,'Башня_ГПН_Питер','2018_E_261',52,32,_binary '',14,NULL,35,35,7,20,9,'2018-12-01','2018-12-07','2018-12-21',3,'2018-12-10',69,73,NULL,NULL,NULL,NULL,2,7,8,15,1,63,NULL,NULL,44,44,NULL,NULL,69,NULL);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_coment`
--

DROP TABLE IF EXISTS `project_coment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_coment` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectId` int(11) NOT NULL,
  `EmployeeId` int(11) NOT NULL,
  `Name` text NOT NULL,
  `CreateTime` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_project_coment_1_idx` (`ProjectId`),
  KEY `fk_project_coment_2_idx` (`EmployeeId`),
  CONSTRAINT `fk_project_coment_1` FOREIGN KEY (`ProjectId`) REFERENCES `project` (`Id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_coment_2` FOREIGN KEY (`EmployeeId`) REFERENCES `employee` (`Id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_coment`
--

LOCK TABLES `project_coment` WRITE;
/*!40000 ALTER TABLE `project_coment` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_coment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_employee`
--

DROP TABLE IF EXISTS `project_employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_employee` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectId` int(11) NOT NULL,
  `EmployeeId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_project_employee_1_idx` (`ProjectId`),
  KEY `fk_project_employee_2_idx` (`EmployeeId`),
  CONSTRAINT `fk_project_employee_1` FOREIGN KEY (`ProjectId`) REFERENCES `project` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_employee_2` FOREIGN KEY (`EmployeeId`) REFERENCES `employee` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_employee`
--

LOCK TABLES `project_employee` WRITE;
/*!40000 ALTER TABLE `project_employee` DISABLE KEYS */;
INSERT INTO `project_employee` VALUES (2,38,78);
/*!40000 ALTER TABLE `project_employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_manager_company`
--

DROP TABLE IF EXISTS `project_manager_company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_manager_company` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectId` int(11) NOT NULL,
  `ManagerId` int(11) NOT NULL,
  `CompanyId` int(11) NOT NULL DEFAULT '0',
  `IsClient` bit(1) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `project_fk2` (`ProjectId`),
  KEY `manager_fk6` (`ManagerId`),
  KEY `fk_project_manager_1_idx` (`CompanyId`),
  CONSTRAINT `fk_project_manager_1` FOREIGN KEY (`CompanyId`) REFERENCES `company` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `manager_fk6` FOREIGN KEY (`ManagerId`) REFERENCES `manager` (`Id`),
  CONSTRAINT `project_fk2` FOREIGN KEY (`ProjectId`) REFERENCES `project` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_manager_company`
--

LOCK TABLES `project_manager_company` WRITE;
/*!40000 ALTER TABLE `project_manager_company` DISABLE KEYS */;
INSERT INTO `project_manager_company` VALUES (1,27,26,32,_binary '\0'),(2,31,33,23,_binary '\0');
/*!40000 ALTER TABLE `project_manager_company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_subcontractor`
--

DROP TABLE IF EXISTS `project_subcontractor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_subcontractor` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectId` int(11) NOT NULL,
  `SubcontractorId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_project_subcontractor_1_idx` (`ProjectId`),
  KEY `fk_project_subcontractor_2_idx` (`SubcontractorId`),
  CONSTRAINT `fk_project_subcontractor_1` FOREIGN KEY (`ProjectId`) REFERENCES `project` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_subcontractor_2` FOREIGN KEY (`SubcontractorId`) REFERENCES `subcontractor` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_subcontractor`
--

LOCK TABLES `project_subcontractor` WRITE;
/*!40000 ALTER TABLE `project_subcontractor` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_subcontractor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_task`
--

DROP TABLE IF EXISTS `project_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_task` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_task`
--

LOCK TABLES `project_task` WRITE;
/*!40000 ALTER TABLE `project_task` DISABLE KEYS */;
INSERT INTO `project_task` VALUES (7,'Обучить'),(8,'Оценить'),(9,'Вовлечение'),(10,'Нет задачи'),(11,'Другое'),(12,'Офис менеджер');
/*!40000 ALTER TABLE `project_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sphere_activity`
--

DROP TABLE IF EXISTS `sphere_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sphere_activity` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sphere_activity`
--

LOCK TABLES `sphere_activity` WRITE;
/*!40000 ALTER TABLE `sphere_activity` DISABLE KEYS */;
INSERT INTO `sphere_activity` VALUES (20,'Ивент'),(21,'Фарма'),(22,'Банк'),(23,'Нефть и газ'),(24,'PR и маркетинг'),(25,'T&D'),(26,'Металургия'),(27,'ИТ'),(28,'Вендор'),(29,'Госсектор'),(30,'Автопром'),(31,'Подрядчик'),(32,'FMCG'),(33,'Другое'),(34,'Ретейл');
/*!40000 ALTER TABLE `sphere_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_project`
--

DROP TABLE IF EXISTS `status_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status_project` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_project`
--

LOCK TABLES `status_project` WRITE;
/*!40000 ALTER TABLE `status_project` DISABLE KEYS */;
INSERT INTO `status_project` VALUES (46,'Новый запрос'),(47,'Принят в обработку '),(48,'Запрошены уточнения '),(49,'Отправлено предложение '),(50,'Получены комментарии '),(51,'Отправлено обновление '),(52,'Принят '),(53,'Проведен '),(54,'Закрыт '),(55,'Отложен '),(56,'Отменен '),(57,'Проигран ');
/*!40000 ALTER TABLE `status_project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcontractor`
--

DROP TABLE IF EXISTS `subcontractor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcontractor` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Surname` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `user_fk3` (`UserId`),
  CONSTRAINT `user_fk3` FOREIGN KEY (`UserId`) REFERENCES `user` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcontractor`
--

LOCK TABLES `subcontractor` WRITE;
/*!40000 ALTER TABLE `subcontractor` DISABLE KEYS */;
INSERT INTO `subcontractor` VALUES (3,'Екатерина','Спектор','lastname',153),(4,'Алина','Кутлиярова','last',198);
/*!40000 ALTER TABLE `subcontractor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_company`
--

DROP TABLE IF EXISTS `type_company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_company` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_company`
--

LOCK TABLES `type_company` WRITE;
/*!40000 ALTER TABLE `type_company` DISABLE KEYS */;
INSERT INTO `type_company` VALUES (9,'Ивент'),(10,'MICE'),(11,'MICE и ивент'),(12,'DMC'),(13,'Фото и видео'),(14,'Полиграфия'),(15,'Агенты'),(16,'Другое'),(17,'Клиент');
/*!40000 ALTER TABLE `type_company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_contact`
--

DROP TABLE IF EXISTS `type_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_contact` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_contact`
--

LOCK TABLES `type_contact` WRITE;
/*!40000 ALTER TABLE `type_contact` DISABLE KEYS */;
INSERT INTO `type_contact` VALUES (1,'Скайп'),(2,'Эл.почта'),(13,'Рабочий номер'),(14,'Личный номер'),(15,'Профиль в соц. сетях'),(16,'Сайт'),(17,'Адрес компании'),(18,'Должность');
/*!40000 ALTER TABLE `type_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_project`
--

DROP TABLE IF EXISTS `type_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_project` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_project`
--

LOCK TABLES `type_project` WRITE;
/*!40000 ALTER TABLE `type_project` DISABLE KEYS */;
INSERT INTO `type_project` VALUES (16,'Не определён'),(17,'Сторонний тендер'),(18,'Тендер ISG'),(19,'Субподряд'),(20,'Наш проект');
/*!40000 ALTER TABLE `type_project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_sale`
--

DROP TABLE IF EXISTS `type_sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_sale` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_sale`
--

LOCK TABLES `type_sale` WRITE;
/*!40000 ALTER TABLE `type_sale` DISABLE KEYS */;
INSERT INTO `type_sale` VALUES (6,'Партнерка'),(7,'Сарафан'),(8,'Прямой'),(9,'Запрос клиента'),(11,'Сайт ISG'),(12,'Реклама'),(13,'Инфо на промо-сайтах'),(14,'Facebook');
/*!40000 ALTER TABLE `type_sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Contracts` text,
  `Comments` varchar(255) DEFAULT '0',
  `SphereActivityId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `sphere_sctivity_fk1` (`SphereActivityId`),
  CONSTRAINT `sphere_sctivity_fk1` FOREIGN KEY (`SphereActivityId`) REFERENCES `sphere_activity` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=225 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (148,NULL,'',27),(149,NULL,'',27),(150,NULL,'',20),(151,'','',20),(153,'нет договора','',20),(154,'','вап',27),(155,NULL,'',27),(156,NULL,'',21),(157,NULL,'',33),(158,'','',33),(159,'','',33),(160,NULL,'',26),(161,NULL,'',20),(162,'','',20),(163,NULL,'',20),(164,NULL,'',20),(165,NULL,'',20),(166,'','',33),(167,NULL,'',33),(168,'','',20),(169,NULL,'',29),(170,'','',29),(171,'','',20),(172,NULL,'',20),(173,NULL,'',20),(174,'','',20),(175,'','',20),(176,'','',21),(177,NULL,'',21),(178,'','',20),(179,NULL,'',20),(180,NULL,'',20),(181,NULL,'',21),(182,NULL,'',21),(183,NULL,'',21),(184,'','',33),(185,NULL,'',20),(186,NULL,'',20),(187,'','',20),(188,'','Первый контакт по проекту для Leroy Merlin октябрь 2019',20),(189,NULL,'Работали на проекте Leroy Merlin 3000 2019',20),(190,NULL,'',34),(191,NULL,'',20),(192,NULL,'',20),(193,'','',20),(194,'','',20),(195,NULL,'',20),(196,NULL,'',33),(197,'','',33),(198,'нет договора','',20),(199,NULL,'',23),(200,'','',23),(201,NULL,'',20),(202,'','',20),(203,'','',20),(204,'','',20),(205,NULL,'',20),(206,NULL,'',20),(207,'','',25),(208,NULL,'',25),(209,NULL,'',20),(210,NULL,'',20),(211,'','',27),(212,NULL,'',27),(213,'','',24),(214,NULL,'',24),(215,'','',33),(216,NULL,'',33),(217,NULL,'',20),(218,'','',21),(219,'','',20),(220,NULL,'',20),(221,NULL,'',20),(222,NULL,'',20),(223,'','',20),(224,NULL,'',23);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-14 10:27:39
