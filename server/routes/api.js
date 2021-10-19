const express = require('express');

const router = express.Router();

const apiController = require('../controller/apiController.js')

router.get('/home/:username', apiController.getBuckitList);

router.post('/signup', apiController.createUser);

router.post('/addBuckit', apiController.createBuckit);


module.exports = router;