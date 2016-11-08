Ext.define('Demo.store.Users', {
    extend: 'Ext.data.Store',
    requires: [
        'Demo.model.UserItem'
    ],
    model: 'Demo.model.UserItem',
    proxy: {
        type: 'direct',
        api: {
            read: 'Server.Demo.UsersApi.read',
            update: 'Server.Demo.UsersApi.update'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message'
        }
    },
    autoLoad: true,
    autoSync: true,
    sorters: [{
        property: 'start',
        direction: 'DESC'
    }]

});