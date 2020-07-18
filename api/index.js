const express = require('express');
const router = express.Router();
const logger = require("./middlewares/logger");
const users = require('./routers/users'); //./routers/users

router.use(logger);
router.use('/users',users);

// router.get('/users', (req,res) =>{
//     res.send("Esta esla API");
// })

module.exports = router;