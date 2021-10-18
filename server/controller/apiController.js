// Modules
const { v4: uuidv4 } = require('uuid');
// Models for db
const db = require('../models/buckitModels.js');

const apiController = {};

apiController.createUser = (req, res, next) => {
  const userId = uuidv4();
  const { username, password } = req.body;

  const getUser = `SELECT * FROM users WHERE username='${username}';`;

  db.query(getUser)
    .then((data) => {
      const userAccData = [...data.rows];
      // console.log('getUser data: ', userAccData);
      if (!userAccData[0]) return addNewUser();
      return res.status(200).json(userAccData);
    })
    .catch((err) => {
      console.log('getUser error: ', err);
      return next(err);
    });

  //if user does not exist then insert
  const addNewUser = () => {
    const addUser = `INSERT INTO users VALUES ('${userId}', '${username}', '${password}');`;

    db.query(addUser)
      .then((data) => {
        // console.log('addUser data: ', data);
        return res.status(200).json(data);
      })
      .catch((err) => {
        // console.log('addUser error: ', err);
        return next(err);
      });
  };
};

// buckit_list creation process
// user signs up with username and password
// store username temporarily (because no session yet)
// when user adds buckit, query a search in db using username to grab _id
// then inserting into buckit_list table using _id and all entries given

module.exports = apiController;
