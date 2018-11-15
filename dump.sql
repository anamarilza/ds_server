-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: sistemaHoras
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.16.04.1

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
-- Current Database: `sistemaHoras`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sistemaHoras` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `sistemaHoras`;

--
-- Table structure for table `Aluno`
--

DROP TABLE IF EXISTS `Aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Aluno` (
  `matricula` int(11) NOT NULL,
  `nome_aluno` varchar(100) DEFAULT NULL,
  `cpf_aluno` varchar(11) DEFAULT NULL,
  `senha_aluno` varchar(20) DEFAULT NULL,
  `id_curriculo` int(11) DEFAULT NULL,
  PRIMARY KEY (`matricula`),
  KEY `FK` (`id_curriculo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Aluno`
--

LOCK TABLES `Aluno` WRITE;
/*!40000 ALTER TABLE `Aluno` DISABLE KEYS */;
INSERT INTO `Aluno` VALUES (0,'João Nerd','00000000000','helloworld',0);
/*!40000 ALTER TABLE `Aluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Atividade`
--

DROP TABLE IF EXISTS `Atividade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Atividade` (
  `id_atividade` int(11) NOT NULL AUTO_INCREMENT,
  `id_curriculo` int(11) DEFAULT NULL,
  `nome_atividade` varchar(60) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `horas_fixo` tinyint(1) DEFAULT NULL,
  `max_horas` int(11) DEFAULT NULL,
  `nro_horas_fixo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_atividade`),
  KEY `FK` (`id_curriculo`,`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Atividade`
--

LOCK TABLES `Atividade` WRITE;
/*!40000 ALTER TABLE `Atividade` DISABLE KEYS */;
INSERT INTO `Atividade` VALUES (0,0,'Monitoria',2,1,102,51),(1,0,'Bolsista/Voluntário em Projeto de Pesquisa',0,1,153,51),(2,0,'Bolsista/Voluntário em Projeto de Extensão',1,1,153,51),(3,0,'Bolsista/Voluntário em Projeto de Ensino',2,1,153,51),(4,0,'Participação em Atividade de Extensão',1,0,153,NULL),(5,0,'Participação em Semana Acadêmica do Curso',2,0,153,NULL),(6,0,'Participação em Cursos e Escolas',2,0,102,NULL),(7,0,'Participação em Eventos Científicos Regionais e Locais',0,1,51,17),(12,0,'Participação em Eventos Científicos Nacionais',0,1,68,34),(13,0,'Participação em Eventos Científicos Internacionais',0,1,68,34),(14,0,'Publicação em Eventos Científicos Internacionais',0,1,136,68),(15,0,'Publicação em Eventos Científicos Regionais e Locais',0,1,68,34),(16,0,'Publicação em Eventos Científicos Nacionais',0,1,51,102),(17,0,'Representação Estudantil',2,1,102,51),(18,0,'Obtenção de Prêmios e Distinções',0,1,136,68),(19,0,'Certificações Profissionais',2,1,102,51),(20,0,'Disciplina Optativa ou Livre',2,0,NULL,NULL);
/*!40000 ALTER TABLE `Atividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categoria`
--

DROP TABLE IF EXISTS `Categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Categoria` (
  `id_categoria` int(11) NOT NULL,
  `nome_categoria` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categoria`
--

LOCK TABLES `Categoria` WRITE;
/*!40000 ALTER TABLE `Categoria` DISABLE KEYS */;
INSERT INTO `Categoria` VALUES (0,'Pesquisa'),(1,'Extensão'),(2,'Ensino'),(3,'Livre');
/*!40000 ALTER TABLE `Categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Correcao`
--

DROP TABLE IF EXISTS `Correcao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Correcao` (
  `id_correcao` int(11) NOT NULL,
  `id_solic` int(11) DEFAULT NULL,
  `data_correcao` datetime DEFAULT NULL,
  `id_status` int(11) DEFAULT NULL,
  `siape_admin` int(11) DEFAULT NULL,
  `resp_correcao` varchar(200) DEFAULT NULL,
  `horas_aceitas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_correcao`),
  KEY `FK` (`id_solic`,`id_status`,`siape_admin`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Correcao`
--

LOCK TABLES `Correcao` WRITE;
/*!40000 ALTER TABLE `Correcao` DISABLE KEYS */;
/*!40000 ALTER TABLE `Correcao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Curriculo`
--

DROP TABLE IF EXISTS `Curriculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Curriculo` (
  `id_curriculo` int(11) NOT NULL,
  `id_curso` int(11) DEFAULT NULL,
  `horas_comp_min` int(11) DEFAULT NULL,
  `horas_liv_min` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_curriculo`),
  KEY `FK` (`id_curso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Curriculo`
--

LOCK TABLES `Curriculo` WRITE;
/*!40000 ALTER TABLE `Curriculo` DISABLE KEYS */;
INSERT INTO `Curriculo` VALUES (0,0,120,100);
/*!40000 ALTER TABLE `Curriculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Curso`
--

DROP TABLE IF EXISTS `Curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Curso` (
  `id_curso` int(11) NOT NULL,
  `nome_curso` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_curso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Curso`
--

LOCK TABLES `Curso` WRITE;
/*!40000 ALTER TABLE `Curso` DISABLE KEYS */;
INSERT INTO `Curso` VALUES (0,'Ciência da Computação'),(1,'Engenharia da Computação');
/*!40000 ALTER TABLE `Curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Duvida`
--

DROP TABLE IF EXISTS `Duvida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Duvida` (
  `id_perg` int(11) NOT NULL,
  `id_faq` int(11) DEFAULT NULL,
  `perg_duv` varchar(200) DEFAULT NULL,
  `resp_duv` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_perg`),
  KEY `FK` (`id_faq`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Duvida`
--

LOCK TABLES `Duvida` WRITE;
/*!40000 ALTER TABLE `Duvida` DISABLE KEYS */;
/*!40000 ALTER TABLE `Duvida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FAQ`
--

DROP TABLE IF EXISTS `FAQ`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FAQ` (
  `id_faq` int(11) NOT NULL,
  `id_curso` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_faq`),
  KEY `FK` (`id_curso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FAQ`
--

LOCK TABLES `FAQ` WRITE;
/*!40000 ALTER TABLE `FAQ` DISABLE KEYS */;
/*!40000 ALTER TABLE `FAQ` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Solicitacao`
--

DROP TABLE IF EXISTS `Solicitacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Solicitacao` (
  `id_solicitacao` int(11) NOT NULL AUTO_INCREMENT,
  `matricula` int(11) DEFAULT NULL,
  `id_atividade` int(11) DEFAULT NULL,
  `id_correcao` int(11) DEFAULT NULL,
  `data_solic` date DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `horas_info` int(11) DEFAULT NULL,
  `pdf` blob,
  PRIMARY KEY (`id_solicitacao`),
  KEY `FK` (`matricula`,`id_atividade`,`id_correcao`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Solicitacao`
--

LOCK TABLES `Solicitacao` WRITE;
/*!40000 ALTER TABLE `Solicitacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `Solicitacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Status`
--

DROP TABLE IF EXISTS `Status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Status` (
  `id_status` int(11) NOT NULL,
  `desc_status` varchar(50) DEFAULT NULL,
  `situacao` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_status`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Status`
--

LOCK TABLES `Status` WRITE;
/*!40000 ALTER TABLE `Status` DISABLE KEYS */;
/*!40000 ALTER TABLE `Status` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-15  0:56:19
