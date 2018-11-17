"use strict";
const express = require('express');
const Ubication = require('../models/ubication');
const ObjectId = require('mongoose').Types.ObjectId;



var router = express.Router();



router.get('/', (req, res) => {
    Ubication.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error retrieving latitude and longitude' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Ubication.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;