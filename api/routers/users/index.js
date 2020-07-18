const express = require('express');
const router = express.Router();
const controller = require('./../../controller/users');
//const logger = require("./../../middlewares/logger");

router.route('/')
.get(controller.getAll)
.post(controller.newUser)  
.delete(controller.deleteUser);  

router.route('/:id')
.put(controller.updateUser)
.get(controller.getUser);  

module.exports = router;