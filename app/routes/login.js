module.exports = function (app) {
  app.get('/acesso_restrito', function(req, res) {
    app.app.controller.dashboard.login(app, req, res);
  });
  app.post('/logar', function(req, res) {
    app.app.controller.dashboard.logar(app, req, res);
  });
}