const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiController.js')

//send username, password to sql db
router.get(
  '/',
  (req, res, next) => res.status(200).send('/api GET REQUEST SUCCESSFUL')
);

router.post('/signup', apiController.createUser);

module.exports = router;