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

const dates = [
    {
        date: '12/12/21',
        title: 'Date with Cher',
        message: 'Hope we have some fun',
        partnerEmail: 'therealcher57@gmail.com',
        activity: '61ae4b3482c9e9574c22a8b1'
    },
    {
        date: '12/15/21',
        title: 'Date with Tatiana',
        message: 'Hope we have a blast',
        partnerEmail: 'tatitats@gmail.com',
        activity: '61ae4b3482c9e9574c22a8b1'
    },
    {
        date: '12/16/21',
        title: 'Date with Griselda',
        message: 'Nothing serious',
        partnerEmail: 'thegriswhostolexmas@gmail.com',
        activity: '61ae4b3482c9e9574c22a8b1'
    }
]

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
        term: 'parks',
        image: 'picnic.jpeg'
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
        term: 'hiking',
        image: 'hiking.jpg'
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
        term: 'cinema',
        image: 'cinema.jpg'
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
        term: 'bowling',
        image: 'bowling.jpg'
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
        term: 'galleries',
        image: 'galleries.jpg'
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
        term: 'museums',
        image: 'museums.jpg'
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
        term: 'amusementparks',
        image: 'amusementparks.jpg'
    },
    {
        name: 'Surfing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'surfing',
        image: 'surfing.jpg'
    },
    {
        name: 'Skiing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'skiing',
        image: 'skiing.jpg'
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
        term: 'paintandsip',
        image: 'paintandsip.jpg'
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
        term: 'personalchefs',
        image: 'personalchefs.png'
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
        term: 'cookingclasses',
        image: 'cookingclasses.jpeg'
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
        term: 'musicvenues',
        image: 'musicvenues.jpg'
    },
    {
        name: 'Club',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'nighttime'
        ],
        term: 'danceclubs',
        image: 'danceclubs.jpg'
    },
    {
        name: 'Bar',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'nighttime'
        ],
        term: 'bars',
        image: 'bars.jpg'
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
        term: 'volleyball',
        image: 'volleyball.jpg'
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
        term: 'boating',
        image: 'boating.jpg'
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
        term: 'casinos',
        image: 'casinos.jpg'
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
        term: 'hiking',
        image: 'walk.jpg'
    },
    {
        name: 'Star Gazing',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'nighttime'
        ],
        term: 'parks',
        image: 'stargazing.jpg'
    },
    {
        name: 'Rock Climbing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'rock_climbing',
        image: 'rockclimbing.jpg'
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
        term: 'axethrowing',
        image: 'axethrowing.jpg'
    },
    {
        name: 'Golfing',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'golf',
        image: 'golf.jpg'
    },
    {
        name: 'Mini Golf',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'mini_golf',
        image: 'minigolf.jpg'
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
        term: 'comedyclubs',
        image: 'comedyclubs.jpg'
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
        term: 'psychic_astrology',
        image: 'astrology.jpg'
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
        term: 'coffee',
        image: 'coffee.jpg'
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
        term: 'beaches',
        image: 'beaches.jpg'

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
        term: 'fitness',
        image: 'fitness.jpg'
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
        term: 'dancestudio',
        image: 'dance.jpg'
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
        term: 'breakfast_brunch',
        image: 'brunch.jpg'
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
        term: 'restaurants',
        image: 'dinner.jpg'
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
        term: 'restaurants',
        image: 'lunch.jpg'
    },
    {
        name: 'Breakfast Out',
        characteristics: [
            'informal',
            'indoors',
            'relaxed',
            'daytime'
        ],
        term: 'breakfast_brunch',
        image: 'breakfast.jpg'
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
        term: 'sportsteams',
        image: 'sportsteams.jpg'
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
        term: 'theater',
        image: 'theater.jpg'
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
        term: 'theater',
        image: 'show.jpg'
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
        term: 'opera',
        image: 'opera.jpg'
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
        term: 'karaoke',
        image: 'karaoke.jpg'
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
        term: 'hookah_bars',
        image: 'hookah.jpeg'
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
        term: 'spas',
        image: 'spas.png'
    },
    {
        name: 'Kayaking',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'rafting',
        image: 'rafting.jpg'
    },
    {
        name: 'Skate Rink',
        characteristics: [
            'informal',
            'indoors',
            'active',
            'daytime'
        ],
        term: 'skatingrinks',
        image: 'skatingrinks.jpg'
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
        term: 'paintball',
        image: 'paintball.jpg'
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
        term: 'gokarts',
        image: 'gokarts.jpg'
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
        term: 'hotels',
        image: 'hotels.jpg'
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
        term: 'landmarks',
        image: 'landmarks.jpg'
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
        term: 'shopping',
        image: 'shopping.png'
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
        term: 'icecream',
        image: 'icecream.jpg'
    },
    {
        name: 'Biking',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
        ],
        term: 'mountainbiking',
        image: 'mountainbiking.jpg'
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
        term: 'escapegames',
        image: 'escapegames.jpg'
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
        term: 'gun_ranges',
        image: 'gunranges.png'
    },
    {
        name: 'Skydiving',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
        ],
        term: 'skydiving',
        image: 'skydiving.jpg'
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
        term: 'zoos',
        image: 'zoos.jpg'
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
        term: 'attractionfarms',
        image: 'attractionfarms.jpg'
    },
    {
        name: 'Watch Sunrise',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'daytime',
        ],
        term: 'beaches',
        image: 'sunrise.jpg'
    },
    {
        name: 'Watch Sunset',
        characteristics: [
            'informal',
            'outdoors',
            'relaxed',
            'nighttime',
        ],
        term: 'beaches',
        image: 'sunsetdate.jpg'
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
        term: 'wineries',
        image: 'winetasting.png'
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
        term: 'breweries',
        image: 'breweries.jpeg'
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
        term: 'barcrawl',
        image: 'barcrawl.jpg'
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
        term: 'campgrounds',
        image: 'camping.jpg'
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
        term: 'arcades',
        image: 'arcades.jpg'
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
        term: 'lakes',
        image: 'lake.jpg'
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
        term: 'fishing',
        image: 'fishing.jpg'
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
        term: 'horsebackriding',
        image: 'horsebackriding.jpg'
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
        term: 'hot_air_balloons',
        image: 'hotairballoon.jpg'
    },
    {
        name: 'Paragliding',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime',
        ],
        term: 'paragliding',
        image: 'paragliding.jpg'
    },
    {
        name: 'Tennis',
        characteristics: [
            'informal',
            'outdoors',
            'active',
            'daytime'
        ],
        term: 'tennis',
        image: 'tennis.jpg'
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
        term: 'gardens',
        image: 'gardens.jpg'
    },
]

db.once('open', async () => {
    await User.deleteMany({});
    await User.insertMany(users);

    console.log('USERS SEEDED!');

    await Dates.deleteMany({});
    await Dates.insertMany(dates);

    console.log('DATES SEEDED!');

    await Activity.deleteMany({});
    await Activity.insertMany(activities);

    console.log('ACTIVITIES SEEDED!');
    process.exit(0);
});
