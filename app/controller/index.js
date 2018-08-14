module.exports.index = function (app, req, res) {
  let connection = app.serv_config.conexao_banco();
  let pesquisa = new app.app.model.consultasSQL(connection);

  pesquisa.All_dicionario(function(error, result){
    res.render('index/index', {
    	dicionario: result 
    });
  });
}