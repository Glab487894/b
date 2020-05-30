const express = require('express');
const router = express.Router();

const  userController = require('../controlers/user');

router.get('/main', userController.main);


module.exports = router;