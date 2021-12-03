const db = require('../config/connection');
const { User, Date, Activity } = require('../models');
const mongoose = require('mongoose');

const users = [
    {
        username: 'gus1995',
        password: 'datehelp',
        email: 'gustavogelato00@gmail.com',
        firstName: 'Gustavo',
        lastName: 'Gelato'
    }
]

db.once('open', async () => {
    await User.deleteMany({});

    await User.insertMany(users);

    console.log('USERS SEEDED!');
    console.log(users);
    process.exit(0);
});

