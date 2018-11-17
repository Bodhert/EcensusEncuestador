"use strict";
const request = require('supertest');
const assert = require('assert');
const app = require('../index');
const Ubication = require('../models/ubication');

//TODO: remember to save ubications before testing

describe('GET /ubications', function () {

    beforeEach(function (done) {
        var ubication = new Ubication({
            name: "juancaminador",
            latitude: "6.193798",
            longitude: "-75.581731"
        });
        ubication.save().then(function () {
            var ubication2 = new Ubication({
                name: "elKuberNea",
                latitude: "6.193233",
                longitude: "-75.581774"
            });
            ubication2.save().then(function () {
                done();
            });
        });
    });

    it('should bring all the ubications', function (done) {
        request(app)
            .get('/ubications')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function (res) {
                assert.notEqual(res.body.length, 0);
            })
            .end(done);
    })
});