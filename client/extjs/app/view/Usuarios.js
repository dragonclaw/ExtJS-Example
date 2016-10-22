Ext.define('Demo.view.Usuarios',{
    extend: 'Ext.tree.Panel',
    title: 'Usuarios',
    xtype: 'Usuarios',
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