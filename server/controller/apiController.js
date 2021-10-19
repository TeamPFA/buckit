const { v4: uuidv4 } = require('uuid');

const db = require('../models/buckitModels.js');

const apiController = {};

apiController.createUser = (req, res, next) => {
  const { userId, username, password } = req.body;

  const getUser = `SELECT * FROM users WHERE username='${username}';`;

  db.query(getUser)
    .then((data) => {
      //sql values is in key: rows
      const userAccData = [...data.rows]; 
      // console.log('getUser data: ', userAccData);
      if (!userAccData[0]) return addNewUser();
      return res.status(200).json(userAccData);
    })
    .catch((err) => {
      // console.log('getUser error: ', err);
      return next(err);
    });

  const addNewUser = () => {
    const addUser = `INSERT INTO users VALUES ('${userId}', '${username}', '${password}');`;

    db.query(addUser)
      .then((data) => {
        const newUserData = [...data.rows];
        // console.log('addUser data: ', newUserData);
        return res.status(200).json(newUserData);
      })
      .catch((err) => {
        // console.log('addUser error: ', err);
        return next(err);
      });
  };
};

// We would essentially want one buckit_list table per user
  // This requires us to join all entries in buckit_list table with the username in users db with req.body.username

apiController.getBuckitList = (req, res, next) => {
  const { username } = req.params;

  const getUserId = `SELECT * FROM users WHERE username='${username}';`;

  db.query(getUserId)
    .then(data => {
      const userIdData = [...data.rows];
      const userId = userIdData[0]['user_id'];
      return userId;
    })
    .then(userId => {
      const getBuckits = `SELECT * FROM buckits WHERE user_id='${userId}';`;

      db.query(getBuckits)
        .then(data => {
          const buckitsData = [...data.rows];
          // console.log('getBuckits data: ', buckitsData);
          return res.status(200).json(buckitsData);
        })
        .catch(err => {
          // console.log('getBuckits error: ', err);
          return next(err);
    })
    .catch(err => {
      // console.log('userAccData error: ', err);
      return next(err);
    });
  });
};


apiController.createBuckit = (req, res, next) => {
  const buckItId = uuidv4();

  const { title, description, url, rating, userId } = req.body;

  const addBuckit =  `INSERT INTO buckits (buckit_id, title, description, url, rating, user_id) \
    VALUES ('${buckItId}', '${title}', '${description}', '${url}', '${rating}', '${userId}');`;

  db.query(addBuckit)
    .then(data => {
      // console.log('newBuckit data: ', datda);
      return res.status(200).json(data); 
    })
    .catch((err) => {
      console.log('addBuckit error: ', err);
      return next(err); 
    }); 
};

module.exports = apiController;
