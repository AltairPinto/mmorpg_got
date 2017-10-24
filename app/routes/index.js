module.exports = function(application) {
    application.get('/', function(req, res) {
        try {
            application.app.controllers.index.index(application, req, res);
        } catch (error) {
            application.controllers.index.index(application, req, res);
        }
    });

    application.post('/autenticar', function(req, res) {
        try {
            application.app.controllers.index.autenticar(application, req, res);
        } catch (error) {
            application.controllers.index.autenticar(application, req, res);
        }
    });
}