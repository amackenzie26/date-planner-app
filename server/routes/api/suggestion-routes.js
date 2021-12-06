const router = require('express').Router();

const { getAllSuggestions, getSuggestion } = require('../../controllers/suggestion-controller');

router.route('/').get(getAllSuggestions);
router.route('/:id').get(getSuggestion);

module.exports = router;