module.exports = function (app) {
  app.post('/pesquisar', function(req, res) {
    app.app.controller.index.pesquisar(app, req, res);
  });
}