"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./dataBaseConection.js');
var ubicationController = require('./controllers/ubicationController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' })); // NOTE: here is the security,
                                                    // have to change from where front end is hosted
app.use('/ubications', ubicationController);

app.listen(3000, () => console.log('Server started at port :  3000'));

module.exports = app;