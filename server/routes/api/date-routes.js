const router = require('express').Router();

const { getAllDates, getDate, createDate } = require('../../controllers/date-controller');

router.route('/').post(createDate);
router.route('/').get(getAllDates);
router.route('/:id').get(getDate);

module.exports = router;