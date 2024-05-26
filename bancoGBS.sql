create database GBSEsportes;

use GBSEsportes;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

insert into usuario values
(null, 'Gustavo', 'gustavo.bsantos@sptech.school', '123');

create table posicao (
nomePosicao varchar(45),
escolhas int 
);