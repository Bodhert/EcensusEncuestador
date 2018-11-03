"use strict";
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ElectronicCensus',{ useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connection with mongoDB Succeeded');
    } else {
        console.log('Error connecting with mongoDB' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;