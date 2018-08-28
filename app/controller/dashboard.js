var nodemailer = require('nodemailer');
// /acesso_restrito
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

  if(sess.email && sess.senha){
    res.redirect('/admin');
  }else{
    res.redirect('/login');
  }
}
// post /logar
module.exports.logar = function (app, req, res) {
  sess = req.session;
  let user = req.body;


  req.assert('email', 'Preencha o campo email!').isEmail();
  req.assert('senha', 'Preencha o campo senha!').notEmpty();

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
  sess.email = user.email;
  sess.senha = user.senha;
  res.redirect("/admin");
}
// /admin
module.exports.dashboard = function (app, req, res) {
  sess = req.session;

  let connection = app.serv_config.conexao_banco();
  let pesquisar = new app.app.model.consultasSQL(connection);

   pesquisar.login(sess.email, sess.senha, function(error, login){
    if (login.length == 0) {
          validacao: [{
            titulo: 'Ops, algo de errado !',
              msg: 'Não encontramos seu cadastro, verifique seu email e senha, e tente novamente'
          }]
      return;
    }
    res.render("admin/admin", {
        validacao:{},
        autor: login.nome_admin
    })
  });


}
module.exports.sair = function (app, req, res) {
  sess = req.session;
  sess.destroy(function (err) {
    delete sess;
    req.session = null;
    res.redirect('/dashboard');
  });
}