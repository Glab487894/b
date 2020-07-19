const express = require('express');
const router = express.Router();

const  authorizationController = require('../controlers/authorization');

router.post('/sing-up', authorizationController.singUp);
router.post('/sing-in', authorizationController.singIn);


module.exports = router;
