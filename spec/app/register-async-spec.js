'use strict';
import request from 'supertest';
import app from '../../app/server';
import finish from './finish';
import User from '../../app/db/entity/user';
import db from '../../app/db/connect';
import async from 'async';

describe('测试user-api', () => {

  beforeEach((done) => {
    async.series([
      (cb) => db.connect('test', cb),
      (cb) => User.find().remove(cb)
    ], finish(done));
  });
  afterEach((done) => {
    db.close(finish(done));
  });

  it('测试输入正确的用户名（8位数字）和密码（6-10位）', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/users').send({username: '12345678', password: '123456'}).expect(201, cb),
      (res, cb) => User.find(cb),
      (users, cb) => {
        expect(users.length).toEqual(1);
        cb();
      }
    ], finish(done));
  });

  it('测试用户名已存在', (done) => {
    async.waterfall([
      (cb) => new User({username: '12345678', password: '123456'}).save((err, data) => cb(err, data)),
      (user, cb) => request(app).post('/api/users').send({username: '12345678', password: '123456'}).expect(409, cb),
    ], finish(done));
  });
});


