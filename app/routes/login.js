module.exports = function (app) {
  app.get('/login', function(req, res) {
  	res.render('dashboard/login')
    // app.app.controller.login.login(app, req, res);
  });
  app.get('/logar', function(req, res) {
    app.app.controller.logar.logar(app, req, res);
  });
}