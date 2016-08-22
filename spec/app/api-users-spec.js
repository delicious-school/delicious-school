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

  it('测试用户名位数错误（>8），密码正确', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/users').send({username: '123456789', password: '1234567'}).expect(400, cb),
    ], finish(done));
  });

  it('测试用户名位数错误（<8），密码正确', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/users').send({username: '123ab', password: '12345678s'}).expect(400, cb),
    ], finish(done));
  });

  it('测试用户名包含非法字符，密码正确', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/users').send({username: '123456a', password: '123456'}).expect(400, cb),
    ], finish(done));
  });

  it('测试用户名正确，密码位数错误（<6）', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/users').send({username: '021234791', password: '012ab'}).expect(400, cb),
    ], finish(done));
  });

  it('测试用户名正确，密码位数错误（>10）', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/users').send({username: '021234791', password: '012ab123456'}).expect(400, cb),
    ], finish(done));
  });

  it('测试用户名，密码位数都错', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/users').send({username: '0212g47', password: '012ab123456'}).expect(400, cb),
    ], finish(done));
  });
});


