const { Schema, model } = require('mongoose');

const dateSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    partnerEmail: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    activity: {
        type: Schema.Types.ObjectId,
        ref: 'Activity',
    },
     //update to tie to Activity model!?
    date: {
        type: Date,
        default: Date.now
    }
   
});

const Dates = model('Date', dateSchema);

module.exports = Dates;