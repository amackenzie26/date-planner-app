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
        unique: true
    },
});

const User = model('User', userSchema);

module.exports = User;