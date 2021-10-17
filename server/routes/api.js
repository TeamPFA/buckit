const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiController.js')

//send username, password to sql db
router.post('/', apiController.createUser)

module.exports = router;  