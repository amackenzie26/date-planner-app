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
    //add activities for each!!??
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
            'informal',
            'outdoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Hiking',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Movie',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Bowling',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Art Gallery',
        characteristics: [
            'formal',
            'informal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Museum',
        characteristics: [
            'formal',
            'informal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Amusement Park',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Surfing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ]
    },
    {
        name: 'Skiing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ]
    },
    {
        name: 'Paint and Sip',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Private Chef',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Cooking Lesson',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Concert',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Club',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'nighttime'
        ]
    },
    {
        name: 'Bar',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'nighttime'
        ]
    },
    {
        name: 'Volleyball',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Boat Tour',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Casino',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Take a Walk',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Star Gazing',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'nighttime'
        ]
    },
    {
        name: 'Rock Climbing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ]
    },
    {
        name: 'Ax Throwing',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Golfing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ]
    },
    {
        name: 'Mini Golf',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ]
    },
    {
        name: 'Comedy Show',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Poetry Reading',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Coffee',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Beach',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'active',
            'daytime'
        ]
    },
    {
        name: 'Fitness Class',
        characteristics: [
            'informal',
            'indoors',
            'outdoors',
            'active',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Dance Lesson',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'active',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Brunch',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime'
        ]
    },
    {
        name: 'Dinner Out',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'nighttime'
        ]
    },
    {
        name: 'Lunch Out',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime'
        ]
    },
    {
        name: 'Breakfast Out',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'daytime'
        ]
    },
    {
        name: 'Sporting Event',
        characteristics: [
            'informal',
            'indoors',
            'outdoors',
            'active',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Go to a Play',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Go to a Show',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Opera',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Karaoke',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'active',
            'nighttime'
        ]
    },
    {
        name: 'Hookah Bar',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'active',
            'nighttime'
        ]
    },
    {
        name: 'Spa',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'nighttime',
            'daytime'
        ]
    },
    {
        name: 'Ice Skating',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Skate Rink',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'daytime'
        ]
    },
    {
        name: 'Paintball',
        characteristics: [
            'informal',
            'indoors',
            'outdoors',
            'active',
            'daytime'
        ]
    },
    {
        name: 'Go Karts',
        characteristics: [
            'informal',
            'indoors',
            'outdoors',
            'active',
            'daytime'
        ]
    },
    {
        name: 'Hotel Stay',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'nighttime'
        ]
    },
    {
        name: 'Site Seeing',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'outdoors',
            'active',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Shopping',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'relaxed',
            'daytime',
        ]
    },
    {
        name: 'Ice Cream',
        characteristics: [
            'informal',
            'indoors',
            'outdoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Biking',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
        ]
    },
    {
        name: 'Take A Drive',
        characteristics: [
            'informal',
            'indoors',
            'outdoors',
            'relaxed',
            'daytime',
            'nighttime'
        ]
    },
    {
        name: 'Shooting Range',
        characteristics: [
            'informal',
            'indoors',
            'outdoors',
            'active',
            'daytime',
        ]
    },
    {
        name: 'Skydiving',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
        ]
    },
    {
        name: 'Zoo',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'active',
            'daytime',
        ]
    },
]


Farm festivities--informal, outdoors, relaxed, active, daytime
Watch sunrise--informal, outdoors, relaxed, nighttime
Watch sunset--informal, outdoors, relaxed, daytime
Wine tasting--informal, formal, outdoors, indoors, relaxed, daytime
Brewery(beer tasting)--informal, outdoors, indoors, relaxed, daytime, nighttime
Bar crawl--informal, outdoors, indoors, relaxed, active, daytime, nighttime
Camping--informal, outdoors, relaxed, active, daytime, nighttime
Arcade--informal, indoors, relaxed, active, nighttime, daytime
Lake trip--informal, outdoors, relaxed, active, nighttime, daytime

