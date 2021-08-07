CREATE DATABASE `elements`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  CONSTRAINT UNIQUE `unique_username` (`username`),
  CONSTRAINT UNIQUE `unique_email` (`email`)
);