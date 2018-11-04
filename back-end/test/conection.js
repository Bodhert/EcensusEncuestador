"use strict";
const mongoose = require('mongoose');

mongoose.Promise = global.Promise

before(function (done) {
    mongoose.connect('mongodb://localhost/ElectronicCensus', { useNewUrlParser: true });
    mongoose.connection.once('open', function () {
        console.log("connection done ")
        done();
    }).on('error', function (error) {
        console.log('connection error: ', error);
    });
});


beforeEach(function (done) {
    mongoose.connection.collections.ubications.drop(function () {
        done();
    });
});



