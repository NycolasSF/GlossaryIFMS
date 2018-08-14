module.exports.index = function (app, req, res) {

  let connection = app.serv_config.conexao_banco();
  let pesquisarDados = new app.app.model.consultasSQL(connection);

  pesquisarDados.All_dicionario(function(error, result){
    res.render('index/index', {
    	dicionario: result,
    	palavras_pesquisadas: {} 
    });
  });
}
module.exports.pesquisar = function(app, req, res) {
	var input = req.body;

	let connection = app.serv_config.conexao_banco();
	let pesquisarDados = new app.app.model.consultasSQL(connection);

 	pesquisarDados.pesquisarPalavra(input.palavra, function(error, result){
		res.render('index/index', {
			dicionario: {},
			palavras_pesquisadas: result
		});
	});
}