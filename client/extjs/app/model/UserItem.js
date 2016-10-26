Ext.define('Demo.model.UserItem', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'firstName'
            //,mapping: '_id'  // IMPORTANT! Uncomment for MongoDB backend example
        },
        {
            name: 'lastName'
        }
    ],

    proxy: {
        type: 'direct',
        api: {
            read:    'Server.Demo.UsersApi.read',
            update:  'Server.Demo.UsersApi.update'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message' // mandatory if you want the framework to set message property content
        }
    }
});