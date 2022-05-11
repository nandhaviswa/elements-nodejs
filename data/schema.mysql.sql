/* ** Root ** */
DROP DATABASE IF EXISTS `elements`;
CREATE DATABASE `elements`;

DROP USER IF EXISTS 'elements'@'%';
CREATE USER 'elements'@'%' IDENTIFIED WITH mysql_native_password BY 'elements';
GRANT ALL PRIVILEGES ON *.* TO 'elements'@'%' WITH GRANT OPTION;

/* ** Application User ** */
USE elements;
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  CONSTRAINT UNIQUE `unique_username` (`username`),
  CONSTRAINT UNIQUE `unique_email` (`email`)
);
INSERT INTO `user` (`username`, `email`) VALUES ('nandhakumar', 'nandhakumar@yopmail.com');
INSERT INTO `user` (`username`, `email`) VALUES ('navayuvan', 'navayuvan@yopmail.com');