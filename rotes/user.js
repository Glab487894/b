const express = require('express');
const router = express.Router();

const  userController = require('../controlers/user');

router.get('/get', userController.get);
router.post('/add', userController.post);
router.patch('/', userController.patch);
router.delete('/', userController.delete);


module.exports = router;
