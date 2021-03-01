import bcrypt from 'bcryptjs'


const users = [
    {
        name:'Admin user',
        email:'admin@example.com',
        password : bcrypt.hashSync('123456',10),
        adress:'adresstest1',
        ice:'ice3',
        isAdmin :true
    },
    {
        name: ' Adnane BACHCHAR',
        email: 'adnane@example.com',
        password: bcrypt.hashSync('Shadow-x1011', 10),
        adress: 'adresstest2',
        ice:'ice1'
    },
       {
        name: ' Asmae Manfalouti',
        email: 'Asmae@example.com',
        password: bcrypt.hashSync('1234567', 10),
        adress: 'adressAsmae',
        ice:'256159456'
    },
    {
    name: ' user2',
    email: 'user2@example.com',
    password: bcrypt.hashSync('user2', 10),
    adress: 'adresstest3',
    ice:'ice2'
    },
]

export default users