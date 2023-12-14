CREATE DATABASE IF NOT EXISTS `artAndGo`
CHARACTER SET utf8mb4 COLLATE
utf8mb4_unicode_ci;
USE artAndGo;

CREATE TABLE `streetArt` (
  `id` int PRIMARY KEY,
  `name` varchar(80),
  `linkImage` varchar(255)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `streetArt_Theme` (
  `id` int PRIMARY KEY,
  `streetArt_id` int,
  `theme_id` int
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `theme` (
  `id` int PRIMARY KEY,
  `name` varchar(80),
  `linkIco` varchar(255)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `streetArt_Theme` ADD FOREIGN KEY (`streetArt_id`) REFERENCES `streetArt` (`id`);
ALTER TABLE `streetArt_Theme` ADD FOREIGN KEY (`theme_id`) REFERENCES `theme` (`id`);
