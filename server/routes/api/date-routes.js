const router = require('express').Router();

const { getAllDates, createDate } = require('../../controllers/date-controller');

router.route('/').post(createDate);
router.route('/').get(getAllDates);

module.exports = router;