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

apiController.getBuckitList = (req, res, next) => {
  const { username } = req.body;

  const getUserId = `SELECT * FROM users WHERE username='${username}';`;

  db.query(getUserId)
    .then(data => {
      const userAccData = [...data.rows];
      userID = userAccData[0].userID;
      return userID; 
    })
    .then(userID => {
      const getBuckits = `SELECT * FROM buckit_list WHERE "buckit_list.userid"='${userID}';`;

      db.query(getBuckits)
        .then(data => {
          const buckitsData = [...data.rows];
          console.log('getBuckits data: ', buckitsData);
          return res.status(200).json(buckitsData);
        })
        .catch(err => {
          console.log('getBuckits error: ', err);
          return next(err);
    })
    .catch(err => {
      console.log('userAccData error: ', err);
      return next(err);
    });
  });


  
};


apiController.createBuckitList = (req, res, next) => {
  const buckItId = uuidv4();

  const { title, description, url, rating, userID } = req.body;

  const addBuckit =  `INSERT INTO buckit_list VALUES ('${buckItId}', '${title}', '${description}', '${url}', ${rating}, '${userID}');`;

  db.query(addBuckit)
    .then(data => {
      const newBuckit = [...data.rows];
      console.log('newBuckit data: ', newBuckit);
      return res.status(200).json(newBuckit); 
    })
    .catch((err) => {
        return next(err); 
    }); 
};

module.exports = apiController;
