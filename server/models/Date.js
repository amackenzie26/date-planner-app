const { Schema, model } = require('mongoose');

const dateSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    partner: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }
});

const Dates = model('Date', dateSchema);

module.exports = Dates;