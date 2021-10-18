const express = require('express');

const router = express.Router();

const apiController = require('../controller/apiController.js')

router.get('/home', apiController.getBuckitList);

router.post('/signup', apiController.createUser);

router.post('/addBuckit', apiController.createBuckitList);


module.exports = router;