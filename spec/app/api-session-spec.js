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

  it('测试用户名不为空，密码为空', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/sessions').send({username: '12345972', password: ''}).expect(400, cb),
    ], finish(done));
  });

  it('测试用户名为空，密码不为空', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/sessions').send({username: '', password: '123456'}).expect(400, cb),
    ], finish(done));
  });

  it('测试用户名为空，密码为空', (done)=> {
    async.waterfall([
      (cb) => request(app).post('/api/sessions').send({username: '', password: ''}).expect(400, cb),
    ], finish(done));
  });

  it('测试密码不提供', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/sessions').send({username: '12345678'}).expect(400, cb),
    ], finish(done));
  });

  it('测试用户名不提供', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/sessions').send({password: '123456'}).expect(400, cb),
    ], finish(done));
  });

  it('测试用户名密码都不提供', (done) => {
    async.waterfall([
      (cb) => request(app).post('/api/sessions').expect(400, cb),
    ], finish(done));
  });
});
