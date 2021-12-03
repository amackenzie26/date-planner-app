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

const activities = [
    {
        name: 'Picnic',
        characteristics: [
            informal,
            outdoors,
            relaxed,
            daytime,
            nighttime
        ]
    },
    {
        name: 'Hiking',
        characteristics: [
            informal,
            outdoors,
            active,
            daytime,
            nighttime
        ]
    },
    {
        name: 'Movie',
        characteristics: [
            informal,
            indoors,
            relaxed,
            daytime,
            nighttime
        ]
    },
    {
        name: 'Bowling',
        characteristics: [
            informal,
            indoors,
            active,
            daytime,
            nighttime
        ]
    },
    {
        name: 'Art Gallery',
        characteristics: [
            formal,
            informal,
            indoors,
            relaxed,
            daytime,
            nighttime
        ]
    },
    {
        name: 'Museum',
        characteristics: [
            formal,
            informal,
            indoors,
            relaxed,
            daytime,
            nighttime
        ]
    },

]

Amusement park--informal, outdoors, active, daytime, nighttime
Surfing--informal, outdoors, active, daytime
Skiing--informal, outdoors, active, daytime
Paint and sip--informal, formal, indoors, relaxed, daytime, nighttime
Private chef--informal, formal, indoors, relaxed, daytime, nighttime
Cooking lessons--informal, formal, indoors, relaxed, daytime, nighttime
Concert--informal, formal, indoors, relaxed, daytime, nighttime
Club--informal, indoors, active, nighttime
Bar--informal, indoors, relaxed, nighttime
Volleyball--informal, outdoors, active, daytime, nighttime
Boat tour--informal, outdoors, relaxed, daytime, nighttime
Casino--informal, indoors, relaxed, daytime, nighttime
Take a walk--informal, outdoors, active, daytime, nighttime
Star gazing--informal, outdoors, relaxed, nighttime
Rock climbing--informal, outdoors, active
Ax throwing--informal, indoors, active
Golfing(mini, reg, TopGolf, driving range)--informal, outdoors, active
Comedy show--informal, formal, indoors, relaxed, daytime, nighttime
Poetry reading--informal, formal, indoors, relaxed, daytime, nighttime
Coffee--informal, indoors, relaxed, daytime, nighttime
Beach--informal, outdoors, relaxed, active, daytime, nighttime
Fitness class--informal, indoors, outdoors, active
Dance lesson--informal, formal, indoors, active
Brunch--informal, formal, indoors, relaxed, daytime
Dinner--informal, formal, indoors, relaxed, nighttime
Sporting event--informal, formal, indoors, outdoors, active, relaxed, daytime, nighttime
Show(play, opera, etc.)--informal, formal, indoors, relaxed, daytime, nighttime
Karaoke--informal, indoors, relaxed, active, nighttime
Hookah bar--informal, indoors, relaxed, active, nighttime
Spa--informal, formal, indoors, relaxed, nighttime, daytime
Ice skating--informal, outdoors, active
Skate Rink - informal, indoors, active
Paintball--informal, indoors, outdoors, active
Go kart--informal, indoors, outdoors, active, daytime
Hotel--informal, formal, indoors, relaxed, nighttime
Site seeing--informal, formal, indoors, outdoors, active, daytime, nighttime
Shopping--informal, indoors, relaxed, active, daytime
Ice cream--informal, outdoors, indoors, relaxed, daytime, nighttime
Biking--informal, outdoors, active, daytime
Take a drive--informal, outdoors, indoors, relaxed, daytime, nighttime
Gun range--informal, outdoors, active, daytime
Skydiving--informal, outdoors, active, daytime
Zoo--informal, outdoors, relaxed, active, daytime
Farm festivities--informal, outdoors, relaxed, active, daytime
Watch sunrise--informal, outdoors, relaxed, nighttime
Watch sunset--informal, outdoors, relaxed, daytime
Wine tasting--informal, formal, outdoors, indoors, relaxed, daytime
Brewery(beer tasting)--informal, outdoors, indoors, relaxed, daytime, nighttime
Bar crawl--informal, outdoors, indoors, relaxed, active, daytime, nighttime
Camping--informal, outdoors, relaxed, active, daytime, nighttime
Arcade--informal, indoors, relaxed, active, nighttime, daytime
Lake trip--informal, outdoors, relaxed, active, nighttime, daytime

