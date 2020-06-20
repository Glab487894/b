const express = require('express');
const router = express.Router();

const  authorizationController = require('../controlers/authorization');

router.post('/', authorizationController.authorization);


module.exports = router;
