const express = require('express');
const router = express.Router();

const  userController = require('../controlers/user');

router.get('/get', userController.get);
router.patch('/update', userController.patch);
router.delete('/remove', userController.delete);


module.exports = router;
