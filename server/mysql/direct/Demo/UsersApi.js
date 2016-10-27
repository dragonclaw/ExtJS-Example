var table = 'users';
var db = global.App.database.connection;


var UsersApi  = {
    //callback as last argument is mandatory
    read: function (params, callback) {
        global.App.database.schemas.User.findAll().then(function (data) {
            return callback({data: data, success: true});
        });
    },
    update: function (params, callback) {
        Person.findOne({where: {name: params.firtsName}}).then(function (person) {
            person.firstName = 'jane'
            console.log(person.firstName) // 'jane'
        });
    }
}

module.exports = UsersApi;