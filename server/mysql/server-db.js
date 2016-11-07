/*var mysql = require('mysql');
var cfg = require('./db-config');

function MySQL(config) {

    this.connection = null;

    this.connect = function(){
        this.connection = mysql.createConnection({
            host: config.hostname,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.db
        });

        this.connection.connect(function(err) {
            if(err){
                console.error('Connection had errors: ', err.code);
                console.error('Connection params used: hostname = ' +  config.hostname + ', username = ' + config.user + ', db = '+  config.db );
                process.exit(1);
            }
        });

        //add alias for debug
        this.connection.debug = this.debug;

        return this.connection;
    };

    this.disconnect = function() {
        this.connection.end();
    };

    this.debug = function(err, callback) {
        // Generate SOFT error, instead of throwing hard error.
        // We send messages with debug info only if in development mode

        if(global.App.env === 'development') {
            callback({
                message: {
                    text: 'Database error',
                    debug: err
                }
            });
        }else{
            callback({
                message: {
                    text: 'Unknown error',
                    debug: null
                }
            });
        }
    }
}

global.App.database = new MySQL(cfg);
*/


var cfg = require('./db-config');
var Sequelize = require('sequelize');

function sequelize() {

    this.connection = null;

    this.connect = function(){
        this.connection = new Sequelize('Demo', 'root', 'urtsis03coord.', {
            host: 'localhost',
	    dialect: 'mysql',
	    port: 3306,
	    pool: {
       		 max : 100,
        	 min : 1,
        	 idle: 3600000
    		}
        });

        return this.connection;
    };
    
    this.disconnect = function(){
        this.connection.close();
    }

    this.User = this.connect().define("users", {
        firstName : {
            type : Sequelize.STRING
        },
        lastName : {
            type : Sequelize.STRING
        }
    }, {
        tableName: 'users'
    });
}

global.App.database = new sequelize();
