const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
    name: {
        type: String
    },
    characteristics: {
        type: [String]
    },
    image: {
        type: String
    },
    term: {
        type: String,
        required: true
    }
});

const Activity = model('Activity', activitySchema);

module.exports = Activity;