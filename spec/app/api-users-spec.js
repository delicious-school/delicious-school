'use strict';
import request from 'supertest';
import app from '../../app/server';
import finish from './finish';
import User from '../../app/db/entity/user';

describe('测试user-api', () => {
  beforeEach((done)=> {
    User.find().remove(finish(done));
  });

  it('测试输入正确的用户名（8位数字）和密码（6-10位）', (done) => {
    request(app)
      .post('/api/users')
      .send({username: '12345678', password: '123456'})
      .expect(201, function (err, data) {
        User.find(function (err, users) {
          expect(users.length).toEqual(1);
          finish(done)(err);
        })
      });
  });

  it('测试用户名位数错误（>8），密码正确', (done) => {
    request(app)
      .post('/api/users')
      .send({username: '123456789', password: '1234567'})
      .expect(400, finish(done));
  });


  it('测试用户名位数错误（<8），密码正确', (done) => {
    request(app)
      .post('/api/users')
      .send({username: '123ab', password: '12345678s'})
      .expect(400, finish(done));
  });


  it('测试用户名包含非法字符，密码正确', (done) => {
    request(app)
      .post('/api/users')
      .send({username: '123456a', password: '123456'})
      .expect(400, finish(done));
  });

  it('测试用户名正确，密码位数错误（<6）', (done) => {
    request(app)
      .post('/api/users')
      .send({username: '021234791', password: '012ab'})
      .expect(400, finish(done));
  });

  it('测试用户名正确，密码位数错误（>10）', (done) => {
    request(app)
      .post('/api/users')
      .send({username: '021234791', password: '012ab123456'})
      .expect(400, finish(done));
  });


  it('测试用户名，密码位数都错', (done) => {
    request(app)
      .post('/api/users')
      .send({username: '0212g47', password: '012ab123456'})
      .expect(400, finish(done));
  });

  it('测试用户名已存在', (done) => {
    new User({
      username: '12345678',
      password: '123456'
    }).save(function (err, data) {
      if (err) return done.fail(err);
      User.find(function (err, users) {
        expect(users.length).toEqual(1);
        request(app)
          .post('/api/users')
          .send({username: '12345678', password: '123456'})
          .expect(409, finish(done));
      })
    });
  });
});
