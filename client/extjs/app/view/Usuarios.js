Ext.define('Demo.view.Usuarios',{
    extend: 'Ext.tree.Panel',
    title: 'Usuarios',
    xtype: 'Usuarios',
    listeners: {
        dblclick : {
            fn: function(dv, record, item, index, dataIndex) {
                alert(dataIndex);
            },
            // You can also pass 'body' if you don't want click on the header or
            // docked elements
            element: 'body',
            scope: this
        }
    },
    store: {
    fields:['firstName','lastName'],
        data:[
        { firstName: 'Lisa', lastName: "Simpsons"  },
            { firstName: 'Bart', lastName: "Simpsons"  },
            { firstName: 'Homer', lastName: "Simpsons"  },
            { firstName: 'Maggie', lastName: "Simpsonite"  }
    ],
        proxy: {
        type: 'memory'
    }
},
    columns: [
        { text: 'First Name',  dataIndex: 'firstName' },
        { text: 'Last Name', dataIndex: 'lastName' }
    ]
});