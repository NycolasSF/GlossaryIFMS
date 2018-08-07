let mysql = require('mysql');

var acessar_banco = function() {
	return mysql.createConnection({
			host:'www.db4free.net',
			user:'glossaryIFMS',
			password:'',
			database:'glossary'
		});
}

module.exports = function(){
	console.log('Banco Conectado !!');
	