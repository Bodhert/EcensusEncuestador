"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./dataBaseConection.js');
var ubicationController = require('./controllers/ubicationController');

var app = express();
app.use(bodyParser.json());
app.use('/ubications', ubicationController);

app.listen(3000, () => console.log('Server started at port :  3000'));