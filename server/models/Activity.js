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
    }
});