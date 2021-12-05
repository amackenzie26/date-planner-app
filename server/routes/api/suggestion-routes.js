const router = require('express').Router();

const { getAllSuggestions } = require('../../controllers/suggestion-controller');

router.route('/').get(getAllSuggestions);

module.exports = router;