var nodemailer = require('nodemailer');

module.exports.login = function (app, req, res) {

  res.render("dashboard/login", {
     validacao: [{
       titulo:{},
       color_background: {}
     }]
   });
}

var sess;

module.exports.acesso_negado = function(app, req, res){
  sess = req.session;

  if(sess.email && sess.matricula){
    res.redirect('/dashboard');
  }else{
    res.redirect('/login');
  }
}

module.exports.logar = function (app, req, res) {
  sess = req.session;
  let user = req.body;

  req.assert('email_logar', 'Preencha o campo email!').isEmail();
  req.assert('senha_logar', 'Preencha o campo senha!').len(8,15);


  let connection = app.serv_config.conexao_banco();
  let informacoes = new app.app.model.consultasSQL(connection);


  var erros = req.validationErrors();
  if (erros) {
      res.render('dashboard/login', {
        validacao: [{
          titulo: 'Ops, algo de errado!',
          msg: 'Verifique seu email e senha'
        }]
      });
    return;
  }
  sess.email = req.body.email_logar;
  sess.senha = req.body.senha_logar;
  res.redirect("/dashboard");
}

module.exports.dashboard = function (app, req, res) {

}
