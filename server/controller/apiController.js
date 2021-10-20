const { v4: uuidv4 } = require('uuid');

const db = require('../models/buckitModels.js');

const apiController = {};

/*
instead of having the middleware function in controller send data back,
we need to store the relevant data in our res.locals, and pass it 
down the middleware chain by invoking next(). The final middleware in the router
is then responsible for sending the data back to the front-end 
*/

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

  //dependent on user login
apiController.getBuckitList = (req, res, next) => {
  const { username } = req.params;

  const getUserId = `SELECT * FROM users WHERE username='${username}';`;

  db.query(getUserId)
    .then(data => {
      console.log('DATA********', data.rows);
      const userIdData = [...data.rows];
      const userId = userIdData[0].user_id;
      console.log('user_id********', userId);
      return userId;
    })
    .then(user_id => {
      const getBuckits = `SELECT * FROM buckits WHERE user_id='${user_id}';`;

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


//works
apiController.createBuckit = (req, res, next) => {
  const buckItId = uuidv4();
  console.log('buckit received')
  console.log('requestbody*********',req.body)
  const { title, description, url, rating, user_id } = req.body;
// this query might need to be re-written
  const addBuckit =  `INSERT INTO buckits (buckit_id, title, description, url, rating, user_id) \
    VALUES ('${buckItId}', '${title}', '${description}', '${url}', '${rating}', '${user_id}');`;

  db.query(addBuckit)
    .then(data => {
      console.log('newBuckit data: ', data);
      console.log(req.body);
      res.locals.body = req.body
      return res.status(200).json(res.locals.body); 
    })
    .catch((err) => {
      console.log('addBuckit error: ', err);
      return next(err); 
    }); 
};

module.exports = apiController;
