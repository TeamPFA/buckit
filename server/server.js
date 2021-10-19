const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Standard middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes to api router 
const apiRouter = require('./routes/api.js');
app.use('/api', apiRouter); 

// Local error handler
app.use((req, res) => res.status(404).send('404: PAGE DOES NOT EXIST'));

// Global error handler
app.use((err, req, res, next) => res.status(500).json(err));

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));;

module.exports = app;
