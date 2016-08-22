'use strict';

import request from 'supertest';
import app from '../../app/server';
import finish from './finish';
import User from '../../app/db/entity/user';
import db from '../../app/db/connect';
import async from 'async';

describe('测试login-api', () => {

  beforeEach((done) => {
    async.series([
      (cb) => db.connect('test', cb),
      (cb) => User.find().remove(cb)
    ], finish(done));
  });
  afterEach((done) => {
    db.close(finish(done));
  });

  it('测试输入用户名存在和密码正确', (done) => {
    async.waterfall([
      (cb) => new User({username: '12345678', password: '123456'}).save((err, data) => cb(err, data)),
      (user, cb) => request(app).post('/api/sessions').send({username: '12345678', password: '123456'}).expect(201, cb),
    ], finish(done));
  });

  it('测试用户名在数据库中不存在', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/sessions').send({username: '12345678', password: '123456'}).expect(401, cb),
    ], finish(done));
  });

  it('测试用户名在数据库中存在， 密码错误', (done) => {
    async.waterfall([
      (cb) => new User({username: '12345678', password: '123456'}).save((err, data) => cb(err, data)),
      (user, cb) => request(app).post('/api/sessions').send({username: '12345678', password: '123457'}).expect(401, cb),
    ], finish(done));
  });
});
