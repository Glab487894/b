const express = require('express');
const router = express.Router();

router.use('/user', require('./user'));
router.use('/authorization', require('./authorization'));

module.exports = router;