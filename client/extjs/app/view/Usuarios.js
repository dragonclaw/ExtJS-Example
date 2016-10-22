Ext.define('Demo.view.Usuarios',{
    extend: 'Ext.tree.Panel',
    title: 'Usuarios',
    xtype: 'Usuarios',
    store: {
    fields:['name', 'email', 'phone'],
        data:[
        { name: 'Lisa',  email: "lisa@simpsons.com",
            phone: "555-111-1224"  },
        { name: 'Bart',  email: "bart@simpsons.com",
            phone: "555-222-1234" },
        { name: 'Homer', email: "home@simpsons.com",
            phone: "555-222-1244"  },
        { name: 'Marge', email: "marge@simpsons.com",
            phone: "555-222-1254"  }
    ],
        proxy: {
        type: 'memory'
    }
},
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1},
        { text: 'Phone', dataIndex: 'phone' }
    ]
});