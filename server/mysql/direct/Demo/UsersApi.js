var table = 'users';
var db = global.App.database.connection;


var UsersApi  = {
    //callback as last argument is mandatory
    read: function (params, callback) {
        db.User.findAll().then(function (data) {
            return callback({data: data, success: true});
        });
    },
    update: function (params, callback) {
        db.findOne({where: {name: params.firtsName}}).then(function (person) {
            person.firstName = 'jane'
            console.log(person.firstName) // 'jane'
        });
    }
}

module.exports = UsersApi;
