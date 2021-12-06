const { Activity } = require('../models');

module.exports = {
    async getAllSuggestions(req, res) {
        const allSuggestions = await Activity.find({});

        if (!allSuggestions) {
            return res.status(400).json({ message: 'No suggestions found' });
        }

        res.status(200).json(allSuggestions);
    },
    async getSuggestion({ params }, res) {
        const suggestion = await Activity.findOne({ _id: params.id });

        if (!suggestion) {
            return res.status(400).json({ message: 'No suggestion found by that id'});
        }

        res.status(200).json(suggestion);
    }
}