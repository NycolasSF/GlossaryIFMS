let mysql = require('mysql');

var acessar_banco = function() {
	return mysql.createConnection({
			host:'www.db4free.net',
			user:'estudantes',
			password:'estudantes6',
			database:'glossaryifms'
		});
}

module.exports = function(){
	console.log('Banco Conectado !!');
	return acessar_banco;
}