"use strict";
const moongose = require('mongoose');

moongose.connect('mongodb://localhost/ElectronicCensus', { useNewUrlParser: true });

moongose.connection.once('open', function () {
    console.log("conection ready");
}).on('error', function (error) {
    console.log('conection error:', error);
});

