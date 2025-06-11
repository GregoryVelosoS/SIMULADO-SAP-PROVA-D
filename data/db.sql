CREATE DATABASE sap_2025_1;
USE sap_2025_1;
CREATE TABLE usuarios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100)
)
CREATE TABLE livros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    autor VARCHAR(100),
    genero VARCHAR(100),
    `status` VARCHAR(100),
    usuario VARCHAR(100)
)