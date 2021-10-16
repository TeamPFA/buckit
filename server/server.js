const path = require('path');
const express = require('express');

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;

// Required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes directory for all routing
// const testRouter = require('./routes/api)
// app.use('/api', testRouter);
// Testing endpoint
app.use('/api', (req, res) => res.status(200).send('BUCKIT BACK-END!!'));

// Local error handler
app.use('*', (req, res) => res.status(404).send('404: PAGE DOES NOT EXIST'));

// Global error handler
app.use((err, req, res, next) => res.status(500).send('500: INTERAL SERVER ERROR'));

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));

module.exports = app;
