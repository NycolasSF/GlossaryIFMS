module.exports = function (app) {
  app.post('/cadastro_palavra', function(req, res) {
    app.app.controller.dashboard.cadastro_palavra(app, req, res);
  });
}
