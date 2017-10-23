/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function() {
    console.log('Entrou na função de conexão')
    var db = new mongo.Db(
        'got', // nome do banco
        new mongo.Server(
            '192.168.99.100', // string contendo o endereço do servidor 'localhost'
            7755, // porta de conexão '27017'
            {}
        ), {}
    );
    return db;
}

module.exports = function() {
    return connMongoDB;
}