Ext.define('Demo.view.Usuarios',{
    extend: 'Ext.grid.Panel',
    title: 'Usuarios',
    xtype: 'Usuarios',
    store: 'Users',/*{
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
},*/
    columns: [
        { text: 'First Name',  dataIndex: 'firstName' },
        { text: 'Last Name', dataIndex: 'lastName' }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
    ]
});