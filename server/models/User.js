const { userSchema, model } = require('mongoose');

const userSchema = new userSchema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});

const User = model('User', userSchema);

module.exports = User;