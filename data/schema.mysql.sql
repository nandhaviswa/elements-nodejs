CREATE DATABASE `elements`;

DROP USER IF EXISTS 'elements'@'127.0.0.1';
CREATE USER 'elements'@'127.0.0.1' IDENTIFIED WITH mysql_native_password BY 'elements';
GRANT ALL PRIVILEGES ON *.* TO 'elements'@'127.0.0.1' WITH GRANT OPTION;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  CONSTRAINT UNIQUE `unique_username` (`username`),
  CONSTRAINT UNIQUE `unique_email` (`email`)
);