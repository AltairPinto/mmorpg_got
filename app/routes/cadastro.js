module.exports = function(application) {
    application.get('/cadastro', function(req, res) {
        try {
            application.app.controllers.cadastro.cadastro(application, req, res);
        } catch (error) {
            application.controllers.cadastro.cadastro(application, req, res);
        }
    });

    application.post('/cadastrar', function(req, res) {
        try {
            application.app.controllers.cadastro.cadastrar(application, req, res);
        } catch (error) {
            console.log(error)
            application.controllers.cadastro.cadastrar(application, req, res);
        }
    });
}