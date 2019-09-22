const myRouter = require('./Routes/myRoutes');
const express = require('express');
const app = express();

app.use(express.json()); // include this middleware to put body data

app.use('/api/v1/tours', myRouter); // mount those route and it's always set bottom all of the route module

module.exports = app;
