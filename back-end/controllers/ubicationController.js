"use strict";
const express = require('express');
const Ubication   = require('../models/ubication');

var router = express.Router();



router.get('/', (req, res) => {
    Ubication.find((err, docs) => {
        if (!err) {
            res.send({ location: docs });
            console.log(docs);
        } else {
            console.log('Error retrieving latitude and longitude' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;