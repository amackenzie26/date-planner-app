const { Dates } = require('../models');

module.exports = {
    async getAllDates(req, res) {
        const allDates = await Dates.find({});

        if (!allDates) {
            return res.status(400).json({ message: 'No dates found' });
        }

        res.status(200).json(allDates);
    }
    ,
    async createDate({ body }, res) {
        const date = await Dates.create(body);

        if (!date) {
            return res.status(400).json({ message: 'Unable to create date'});
        }

        res.status(200).json(date);
    }
}