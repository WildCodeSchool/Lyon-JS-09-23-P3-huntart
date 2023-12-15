CREATE DATABASE IF NOT EXISTS `artAndGo`
USE artAndGo;

CREATE TABLE `streetArt` (
  `id` int PRIMARY KEY,
  `name` varchar(80),
  `linkImage` varchar(255)
);

CREATE TABLE `streetArt_Theme` (
  `id` int PRIMARY KEY,
  `streetArt_id` int,
  `theme_id` int
);
ALTER TABLE `streetArt_Theme` ADD FOREIGN KEY (`streetArt_id`) REFERENCES `streetArt` (`id`);
ALTER TABLE `streetArt_Theme` ADD FOREIGN KEY (`theme_id`) REFERENCES `theme` (`id`);

CREATE TABLE `theme` (
  `id` int PRIMARY KEY,
  `name` varchar(80),
  `linkImage` varchar(255)
);

