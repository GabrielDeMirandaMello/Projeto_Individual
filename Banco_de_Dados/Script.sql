CREATE DATABASE Projeto_Viagens;
USE Projeto_Viagens;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeusuario VARCHAR (255),
    telefone VARCHAR (30),
    email VARCHAR (255),
    senha VARCHAR(255),
    mesFerias VARCHAR(100)
);
CREATE TABLE viagem (
	idviagem INT PRIMARY KEY AUTO_INCREMENT,
    cidade VARCHAR (100),
    localidade VARCHAR (30),
    climaideal VARCHAR (255),
    tipoviagem VARCHAR(255)
);
CREATE TABLE historia (
	id int primary key auto_increment,
	fk_idviagem INT,
    FOREIGN KEY (fk_idviagem) REFERENCES viagem(idviagem),
    fk_idusuario INT,
    FOREIGN KEY (fk_idusuario) REFERENCES usuario(idusuario),
    urlImagem VARCHAR (5000),
    descricao VARCHAR (210),
    nome varchar(255)
);
DROP TABLE HISTORIA;
select *from historia;
DESC HISTORIA;
update historia set urlImagem = 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/07/asa-aviao-capa2019-06-820x430.jpg' where nome = 'Gabriel Miranda Mello';
select * from usuario join historia on idusuario = fk_idusuario join viagem on idviagem = fk_idviagem;
insert into usuario 
values(null, 'Gabriel Mello', 11976139421, 'Gabriel.admin@admin.com', 12345678, 'Setembro');
select * from usuario;

