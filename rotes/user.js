const express = require('express');
const router = express.Router();

const  userController = require('../controlers/user');

router.get('/', userController.get);
router.post('/', userController.add);
router.patch('/', userController.update);
router.delete('/', userController.delete);


module.exports = router;
