module.exports = function (app) {
  app.get('/admin', function(req, res) {
    app.app.controller.dashboard.dashboard(app, req, res);
  });
  app.get('/sair', function (req, res) {
    app.app.controller.dashboard.sair(app, req, res);
  })
}
