'use strict';
import request from 'supertest';
import app from '../../app/server';
import finish from './finish';
import User from '../../entity/user';

describe('user-api', () => {
  beforeEach((done)=> {
    User.find().remove(finish(done));
  });


  it('post users', (done) => {
    request(app)
      .post('/api/users')
      .send({username:'12345678',password:'123456'})
      .expect(201, function(err,data){
        finish(done)(err);
      });
  });

  it('post users', (done) => {
    request(app)
      .post('/api/users')
      .send({username:'123456789',password:'1234567'})
      .expect(400, function(err,data){
        finish(done)(err);
      });
  });

  it('post articles', (done) => {
    request(app)
      .post('/api/users')
      .send({username:'123456a',password:'123456'})
      .expect(400, function(err,data){
        finish(done)(err);
      });
  });

  it('post articles', (done) => {
    request(app)
      .post('/api/users')
      .send({username:'123ab',password:'123456789as'})
      .expect(400, function(err,data){
        finish(done)(err);
      });
  });

  it('post articles', (done) => {
    request(app)
      .post('/api/users')
      .send({username:'021234791',password:'012ab'})
      .expect(400, function(err,data){
        finish(done)(err);
      });
  });
  it('post articles', (done) => {
    request(app)
      .post('/api/users')
      .send({username:'0212347',password:'012ab'})
      .expect(400, function(err,data){
        finish(done)(err);
      });
  });
  it('post articles', (done) => {
    request(app)
      .post('/api/users')
      .send({username:'021234791',password:'012ab123456'})
      .expect(400, function(err,data){
        finish(done)(err);
      });
  });
  it('post articles', (done) => {
    request(app)
      .post('/api/users')
      .send({username:'0212347',password:'012ab123456'})
      .expect(400, function(err,data){
        finish(done)(err);
      });
  });
  it('post articles', (done) => {
    request(app)
      .post('/api/users')
      .send({username:'021234791',password:'012ab123456'})
      .expect(400, function(err,data){
        finish(done)(err);
      });
  });

it('post uses', (done) => {
    new User({
      username:'12345678',
      password:'123456'
    }).save(function(err, data){
      if (err) return done.fail(err);
      User.find(function(err,users) {
        expect(users.length).toEqual(1);
        console.log(users[0].username);
        console.log(users[0].password);
        request(app)
          .post('/api/users')
          .send({username: '12345678', password: '123456'})
          .expect(409, function (err, data) {
            finish(done)(err);
          })
      })
    });
  });


});
