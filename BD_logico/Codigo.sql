
CREATE TABLE Admins (id_admin INTEGER AUTO_INCREMENT PRIMARY KEY, nome_admin TEXT, email_admin TEXT, senha_admin TEXT);
INSERT INTO Admins VALUES(0, 'NycolasSF', 'nycolassilvafroes@gmail.com', 'nycolassenha');
INSERT INTO Admins VALUES(0, 'EmilySuelen', 'emilysuelen01@gmail.com', 'emilysenha');
INSERT INTO Admins VALUES(0, 'GiovannaMaria', 'mgiovnna@gmail.com', 'giovannasenha');
INSERT INTO Admins VALUES(0, 'AriadneMachado', 'ariadnemachado1@gmail.com', 'ariadnesenha');

CREATE TABLE Dicionario(
	id_palavra INTEGER AUTO_INCREMENT PRIMARY KEY,
	palavra VARCHAR(20),
	traducao  VARCHAR(20),
	img_palavra TEXT,
	exemplos_portugues TEXT,
	exemplos_ingles TEXT,
	autor INTEGER NOT NULL,
	FOREIGN KEY(autor) REFERENCES Admins(id_admin)

);

INSERT INTO Dicionario VALUES(0, 'Screen', 'Tela', 'https://png.pngtree.com/element_origin_min_pic/17/03/22/af20e92a7f89ac79b80eff6c741f4d3b.jpg', 'My screen is Bad', 'Minha tela é ruim', 1);
INSERT INTO Dicionario VALUES(0, 'Body', 'Corpo da página', 'https://media.istockphoto.com/vectors/programming-web-development-concept-code-on-the-screen-laptop-flat-vector-id959984236?k=6&m=959984236&s=612x612&w=0&h=R04QsCo5apj2daYPO_i6RC3d8vDclGVJ6Do7UKxoqSc=', 'The body is bugged.', 'O Corpo da página está bugado', 1);
