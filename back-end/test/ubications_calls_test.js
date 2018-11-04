"use strict";
const request = require('supertest');
const assert = require('assert');
const app = require('../index');

describe('GET /ubications', function(){
    it('should bring all the ubications',function(done){
        request(app)
        .get('/ubications')
        .expect(200)
        .expect('Content-Type','application/json; charset=utf-8')
        .expect(function(res){
            assert.equal(res.body['0']['latitude'], '3333')
        })
        .end(done);
    })
});