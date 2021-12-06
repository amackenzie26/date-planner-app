const { User } = require('../models');

module.exports = {
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Unable to create user'});
        }

        res.status(200).json(user);
    }
}