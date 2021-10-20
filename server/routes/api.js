const express = require('express');

const router = express.Router();

//we should refactor these to be sending the data back to the front end 
//these routes are missing final middleware: (req, res) => {res.sendStatus(200)}
const apiController = require('../controller/apiController.js')

//endpoint for when a user logs in
router.get('/home/:username', apiController.getBuckitList,  
    (req, res) => {
        // console.log('res.locals******', res.locals.buckits);
        return res.status(202).json(res.locals.buckits);
    }
);

router.post('/signup', apiController.createUser);

router.post('/addBuckit', apiController.createBuckit, (req, res) => {
    return res.json(res.locals.body);
});


module.exports = router;