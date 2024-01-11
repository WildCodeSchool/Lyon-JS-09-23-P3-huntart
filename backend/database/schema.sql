CREATE DATABASE IF NOT EXISTS `huntArt`;
USE `huntArt`;
 
CREATE TABLE `streetArt` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(80),
  `linkImage` varchar(255)
);
 
CREATE TABLE `theme` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(80),
  `linkImage` varchar(255)
);
 
CREATE TABLE `streetArt_Theme` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `streetArt_id` int,
  `theme_id` int,
  FOREIGN KEY (`streetArt_id`) REFERENCES `streetArt` (`id`),
  FOREIGN KEY (`theme_id`) REFERENCES `theme` (`id`)
);
 
