const db = require('../config/connection');
const { User, Date, Activity } = require('../models');

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

const dates = [
    {
        date: '12/12/21',
        title: 'Date with Cher',
        partner: 'therealcher57@gmail.com'
    },
    {
        date: '12/15/21',
        title: 'Date with Tatiana',
        partner: 'tatitats@gmail.com'
    },
    {
        date: '12/16/21',
        title: 'Date with Griselda',
        partner: 'thegriswhostolexmas@gmail.com'
    }
]

db.once('open', async () => {
    await Date.deleteMany({});
    await Date.insertMany(users);

    console.log('DATES SEEDED!');
    console.log(dates);
    process.exit(0);
});

