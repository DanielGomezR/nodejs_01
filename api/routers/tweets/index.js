const express = require('express');
const router = express.Router();
const controller = require('./../../controller/tweets');
//const logger = require("./../../middlewares/logger");

router.route('/')
.get(controller.getAll)
.post(controller.newTweet)  
.delete(controller.deleteTweet);  

router.route('/:id')
.put(controller.updateTweet)
.get(controller.getTweet);  

module.exports = router;