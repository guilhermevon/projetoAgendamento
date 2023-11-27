create database usuario;

use usuario;

create table professor
(
	id int unsigned not null auto_increment,
	nome varchar(255) not null,
	primary key(id)
);

create table disciplina
(
	id int unsigned not null auto_increment,
	nome varchar(255) not null,
	primary key(id)
) ENGINE = innodb;

create table turma
(
	id int unsigned not null auto_increment,
	nome varchar(255) not null,
	primary key(id)
);