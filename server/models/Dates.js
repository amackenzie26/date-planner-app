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
    }
});

const Dates = model('Dates', dateSchema);

module.exports = Dates;