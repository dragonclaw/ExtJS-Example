var table = 'users';
var db = global.App.database;


var UsersApi  = {

    //FUNCIONES DE SEQUELIZE
    read: function (params, callback) {
        console.log(db);
        db.User.findAll().then(function (data) {
            console.log("test");
            console.log(data);
            return callback(null, {data: data});
        });
    },
    update: function (params, callback) {
        db.User.findOne({where: {name: params.firtsName}}).then(function (person) {
            person.firstName = 'jane';
            console.log(person.firstName);// 'jane'
        });
    }
};

/*    read: function(params, callback){
        var sql = 'SELECT * FROM ' + table,
            where = '';

        //filtering. this example assumes filtering on 1 field, as multiple field where clause requires additional info e.g. chain operator

        if(params.filter){
            where = " WHERE `"+ params.filter[0].property  + "` LIKE '%" + params.filter[0].value + "%'"; // set your business logic here to perform advanced where clause
            sql += where;
        }

        // this sample implementation supports 1 sorter, to have more than one, you have to loop and alter query
        if(params.sort){
            var s = params.sort[0];
            sql = sql + ' ORDER BY ' + db.escape(s.property) +  ' ' + db.escape(s.direction);
        }

        // Paging
        sql = sql + ' LIMIT ' + db.escape(params.start) + ' , ' + db.escape(params.limit);

        db.query(sql, function(err, rows, fields) {
            if (err) {
                db.debug(err, callback);
                return false;
            }

            //get totals for paging

            var totalQuery = 'SELECT count(*) as totals from ' + table + where;

            db.query(totalQuery, function(err, rowsTotal, fields) {
                if (err) {
                    db.debug(err, callback);
                    return false;
                }

                callback(null, {
                    data: rows,
                    total: rowsTotal[0].totals
                });
            });
        });
    },

    update: function(params, callback){
        db.query('UPDATE ' + table + ' SET ? where id = ' + db.escape(params['id']), params, function(err, result) {
            if (err) {
                db.debug(err, callback);
                return false;
            }

            callback();
        });
    }
};*/

module.exports = UsersApi;
