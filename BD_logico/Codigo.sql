CREATE TABLE Dicionario(
	id_palavra INTEGER NOT NULL AUTO_INCREMENT,
	palavra VARCHAR(20),
	traducao  VARCHAR(20),
	img_palavra TEXT,
	exemplos_portugues TEXT,
	exemplos_ingles TEXT
);

INSERT INTO Dicionario VALUES(1, 'Screen', 'Tela', 'img/screnn.jpj', 'My screen is Bad', 'Minha tela é ruim');