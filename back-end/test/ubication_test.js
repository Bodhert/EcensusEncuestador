"use strict";
const mongoose = require('mongoose');
const assert = require('assert');
const Ubication = require('../models/ubication');

describe('Ubication tests', function(){
    beforeEach(function(done){
        mongoose.connection.collections.ubications.drop(function(){
            done();
        });
    });

    it('Saves a location with latitude and longitude', function(done){
        var ubication = new Ubication({
            latitude: "3333",
            longitude: "4444"
        });

        ubication.save().then(function(){
            assert(!ubication.isNew);
            done();
        });
    });
});