const { User } = require('../models');
const { signToken } = require('../utils/auth')

module.exports = {
    async authenticateUser({ body }, res) {
        const user = await User.findOne({ username: body.username })

        if (!user) {
            return res.status(400).json({ message: 'Unable to find user'});
        }

        // if (user.password === body.password) {
        //     res.status(200).json(user);
        // } else {
        //     return res.status(400).json({ message: 'Password Incorrect'});
        // }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Password Incorrect'})
        }
        
        const token = signToken(user);
        return res.status(200).json({ token, user})
    }
}