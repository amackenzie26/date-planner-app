const db = require('../config/connection');
const { User, Dates, Activity } = require('../models');

const users = [
    {
        username: 'gus1995',
        password: 'datehelp',
        email: 'gustavogelato00@gmail.com',
        firstName: 'Gustavo',
        lastName: 'Gelato'
    }
]

// const dates = [
//     {
//         date: '12/12/21',
//         title: 'Date with Cher',
//         partner: 'therealcher57@gmail.com',
//         activity: 'rollerblading'
//     },
//     {
//         date: '12/15/21',
//         title: 'Date with Tatiana',
//         partner: 'tatitats@gmail.com',
//         activity: 'bar crawl'
//     },
//     {
//         date: '12/16/21',
//         title: 'Date with Griselda',
//         partner: 'thegriswhostolexmas@gmail.com',
//         activity: 'museum'
//     }
// ]

const activities = [
    {
        name: 'Picnic',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'daytime',
            'nighttime'
        ],
        term: 'parks'
    },
    {
        name: 'Hiking',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'hiking'
    },
    {
        name: 'Movie',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ],
        term: 'cinema'
    },
    {
        name: 'Bowling',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'bowling'
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
        ],
        term: 'galleries'
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
        ],
        term: 'museums'
    },
    {
        name: 'Amusement Park',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'amusementparks'
    },
    {
        name: 'Surfing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'surfing'
    },
    {
        name: 'Skiing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'skiing'
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
        ],
        term: 'paintandsip'
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
        ],
        term: 'personalchefs'
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
        ],
        term: 'cookingclasses'
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
        ],
        term: 'musicvenues'
    },
    {
        name: 'Club',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'nighttime'
        ],
        term: 'danceclubs'
    },
    {
        name: 'Bar',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'nighttime'
        ],
        term: 'bars'
    },
    {
        name: 'Volleyball',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'volleyball'
    },
    {
        name: 'Boat Tour',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'daytime',
            'nighttime'
        ],
        term: 'boating'
    },
    {
        name: 'Casino',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ],
        term: 'casinos'
    },
    {
        name: 'Take a Walk',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'hiking'
    },
    {
        name: 'Star Gazing',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'nighttime'
        ],
        term: 'parks'
    },
    {
        name: 'Rock Climbing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'rock_climbing'
    },
    {
        name: 'Ax Throwing',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'axethrowing'
    },
    {
        name: 'Golfing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'golf'
    },
    {
        name: 'Mini Golf',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'mini_golf'
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
        ],
        term: 'comedyclubs'
    },
    {
        name: 'Astrology Reading',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ],
        term: 'psychic_astrology'
    },
    {
        name: 'Coffee',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ],
        term: 'coffee'
    },
    {
        name: 'Beach',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'active',
            'daytime'
        ],
        term: 'beaches'

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
        ],
        term: 'fitness'
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
        ],
        term: 'dancestudio'
    },
    {
        name: 'Brunch',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime'
        ],
        term: 'breakfast_brunch'
    },
    {
        name: 'Dinner Out',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'nighttime'
        ],
        term: 'restaurants'
    },
    {
        name: 'Lunch Out',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'daytime'
        ],
        term: 'restaurants'
    },
    {
        name: 'Breakfast Out',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'daytime'
        ],
        term: 'breakfast_brunch'
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
        ],
        term: 'sportsteams'
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
        ],
        term: 'theater'
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
        ],
        term: 'theater'
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
        ],
        term: 'opera'
    },
    {
        name: 'Karaoke',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'active',
            'nighttime'
        ],
        term: 'karaoke'
    },
    {
        name: 'Hookah Bar',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'active',
            'nighttime'
        ],
        term: 'hookah_bars'
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
        ],
        term: 'spas'
    },
    {
        name: 'Kayaking',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'rafting'
    },
    {
        name: 'Skate Rink',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'daytime'
        ],
        term: 'skatingrinks'
    },
    {
        name: 'Paintball',
        characteristics: [
            'informal',
            'indoors',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'paintball'
    },
    {
        name: 'Go Karts',
        characteristics: [
            'informal',
            'indoors',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'gokarts'
    },
    {
        name: 'Hotel Stay',
        characteristics: [
            'informal',
            'formal',
            'indoors',
            'relaxed',
            'nighttime'
        ],
        term: 'hotels'
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
        ],
        term: 'landmarks'
    },
    {
        name: 'Shopping',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'relaxed',
            'daytime',
        ],
        term: 'shopping'
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
        ],
        term: 'icecream'
    },
    {
        name: 'Biking',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
        ],
        term: 'mountainbiking'
    },
    {
        name: 'Escape Room',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'escapegames'
    },
    {
        name: 'Shooting Range',
        characteristics: [
            'informal',
            'indoors',
            'outdoors',
            'active',
            'daytime',
        ],
        term: 'gun_ranges'
    },
    {
        name: 'Skydiving',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
        ],
        term: 'skydiving'
    },
    {
        name: 'Zoo',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'active',
            'daytime',
        ],
        term: 'zoos'
    },
    {
        name: 'Farm Festivities',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'active',
            'daytime',
        ],
        term: 'attractionfarms'
    },
    {
        name: 'Watch Sunrise',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'daytime',
        ],
        term: 'beaches'
    },
    {
        name: 'Watch Sunset',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'nighttime',
        ],
        term: 'beaches'
    },
    {
        name: 'Wine Tasting',
        characteristics: [
            'informal',
            'formal',
            'outdoors',
            'indoors',
            'relaxed',
            'daytime',
        ],
        term: 'wineries'
    },
    {
        name: 'Brewery/Tasting',
        characteristics: [
            'informal',
            'outdoors',
            'indoors',
            'relaxed',
            'daytime',
            'nighttime'
        ],
        term: 'breweries'
    },
    {
        name: 'Bar Crawl',
        characteristics: [
            'informal',
            'outdoors',
            'indoors',
            'relaxed',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'barcrawl'
    },
    {
        name: 'Camping',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'campgrounds'
    },
    {
        name: 'Arcade',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'arcades'
    },
    {
        name: 'Lake Trip',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'lakes'
    },
    {
        name: 'Fishing',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'fishing'
    },
    {
        name: 'Horseback Riding',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'horsebackriding'
    },
    {
        name: 'Hot Air Balloon',
        characteristics: [
            'informal',
            'formal',
            'outdoors',
            'relaxed',
            'active',
            'daytime',
            'nighttime'
        ],
        term: 'hot_air_balloons'
    },
    {
        name: 'Paragliding',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime', '
        ],
        term: 'paragliding'
    },
    {
        name: 'Tennis',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'tennis'
    },
    {
        name: 'Botanical Gardens',
        characteristics: [
            'informal',
            'formal',
            'outdoors',
            'active',
            'daytime',
            'nightime'
        ],
        term: 'gardens'
    },
]

db.once('open', async () => {
    await User.deleteMany({});
    await User.insertMany(users);

    console.log('USERS SEEDED!');

    // await Dates.deleteMany({});
    // await Dates.insertMany(dates);

    // console.log('DATES SEEDED!');

    await Activity.deleteMany({});
    await Activity.insertMany(activities);

    console.log('ACTIVITIES SEEDED!');
    process.exit(0);
});
