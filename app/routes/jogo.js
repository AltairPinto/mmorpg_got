module.exports = function(application) {
    application.get('/jogo', function(req, res) {
        try {
            application.app.controllers.jogo.jogo(application, req, res);
        } catch (error) {
            application.controllers.jogo.jogo(application, req, res);
        }
    });
}