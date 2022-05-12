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
	fk_idviagem INT,
    FOREIGN KEY (fk_idviagem) REFERENCES viagem(idviagem),
    fk_idusuario INT,
    FOREIGN KEY (fk_idusuario) REFERENCES usuario(idusuario),
    datahistoria VARCHAR (30),
    descricao VARCHAR (255)
);

select * from usuario join historia on idusuario = fk_idusuario join viagem on idviagem = fk_idviagem;


