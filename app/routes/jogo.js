module.exports = function(application) {
    application.get('/jogo', function(req, res) {
        try {
            application.app.controllers.jogo.jogo(application, req, res);
        } catch (error) {
            application.controllers.jogo.jogo(application, req, res);
        }
    });

    application.get('/sair', function(req, res) {
        try {
            application.app.controllers.jogo.sair(application, req, res);
        } catch (error) {
            application.controllers.jogo.sair(application, req, res);
        }
    });

    application.get('/suditos', function(req, res) {
        try {
            application.app.controllers.jogo.suditos(application, req, res);
        } catch (error) {
            application.controllers.jogo.suditos(application, req, res);
        }
    });

    application.get('/pergaminhos', function(req, res) {
        try {
            application.app.controllers.jogo.pergaminhos(application, req, res);
        } catch (error) {
            application.controllers.jogo.pergaminhos(application, req, res);
        }
    });

    application.post('/ordenar_acao_sudito', function(req, res) {
        try {
            application.app.controllers.jogo.ordenar_acao_sudito(application, req, res);
        } catch (error) {
            application.controllers.jogo.ordenar_acao_sudito(application, req, res);
        }
    });



}