"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UbicationSchema = new Schema({
    latitude: String,
    longitude: String
});

const Ubication = mongoose.model('ubication', UbicationSchema);

module.exports = Ubication