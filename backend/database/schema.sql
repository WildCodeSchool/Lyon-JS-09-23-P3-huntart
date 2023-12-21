CREATE DATABASE IF NOT EXISTS `artAndGo`;
USE `artAndGo`;

CREATE TABLE `streetArt` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(80),
  `linkImage` varchar(255)
);

CREATE TABLE `theme` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(80),
  `linkImage` varchar(255)
);

CREATE TABLE `streetArt_Theme` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `streetArt_id` int,
  `theme_id` int,
  FOREIGN KEY (`streetArt_id`) REFERENCES `streetArt` (`id`),
  FOREIGN KEY (`theme_id`) REFERENCES `theme` (`id`)
);
