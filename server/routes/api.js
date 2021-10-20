const express = require('express');

const router = express.Router();

//we should refactor these to be sending the data back to the front end 
//these routes are missing final middleware: (req, res) => {res.sendStatus(200)}
const apiController = require('../controller/apiController.js')

//endpoint for when a user logs in
router.get('/home/:username', apiController.getBuckitList);

router.post('/signup', apiController.createUser);

router.post('/addBuckit', apiController.createBuckit);


module.exports = router;