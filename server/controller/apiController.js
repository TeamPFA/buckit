//require db
const db = require('../models/buckitModels.js'); 
const apiController = {}; 

apiController.createUser = (req, res, next) => {
    const userId = Math.floor(Math.random()*10000000); 
    console.log(userId);
    const text = `INSERT INTO users VALUES (${userId},'papa', 'john')` 
    db.query(text)
    .then(data => {
        console.log(data);
        return res.status(200).json(data); 
    })
    .catch(error => {
        console.log(error); 
        return next(error); 
    });
}

module.exports = apiController; 