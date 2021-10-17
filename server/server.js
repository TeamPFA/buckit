const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api.js');
const PORT = process.env.PORT || 3000;
const apiController = require('./controller/apiController.js')
// Required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes directory for all routing
// const testRouter = require('./routes/api)
// app.use('/api', testRouter);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
})

// Routes to api router 
app.use('/api', apiRouter); 

// Local error handler
app.use('*', (req, res) => res.status(404).send('404: PAGE DOES NOT EXIST'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Error handler caught middleware error'
  }

  return err;
})

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));;

module.exports = app;
