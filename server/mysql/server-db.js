var cfg = require('./db-config');
var Sequelize = require('sequelize');

function sequelize() {

    this.connection = null;

    this.connect = function(){
        this.connection = new Sequelize('Demo', 'root', 'urtsis03coord.', {
            host: 'localhost',
        });

        return this.connection;
    };
}

global.App.database = new sequelize();
