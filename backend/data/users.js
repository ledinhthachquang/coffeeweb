const bcrypt = require('bcryptjs')
const users=[
    {
        name:'NT',
        email:'20522009@gm.uit.edu.vn',
        password:bcrypt.hashSync('cxmanh123',10),
        isAdmin:true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456',10)
     }
]


module.exports = users