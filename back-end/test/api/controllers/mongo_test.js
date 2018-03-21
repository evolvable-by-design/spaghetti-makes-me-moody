var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {
  describe('mongo_test', function() {
    describe('GET /mongoTest', function() {
      it('should return a default string', function(done) {
        request(server)
          .get('/mongoTest')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql(
              'You successfully called the mongo test endpoint, with query param: blank!!'
            );

            done();
          });
      });

      it('should accept a test parameter', function(done) {
        request(server)
          .get('/mongoTest')
          .query({ testParam: 'EatPasta' })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql(
              'You successfully called the mongo test endpoint, with query param: EatPasta'
            );

            done();
          });
      });
    });
  });
});
