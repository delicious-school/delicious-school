'use strict';
const validateLogin = require('../../../app/api/login/validate-login');
describe('验证用户名，密码是否为空或该属性不存在', ()=> {
  it('用户名为空，返回false', ()=> {
    const user = {
      username: '',
      password: '123456'
    };
    expect(validateLogin(user)).toBeFalsy();
  });
  it('用户名不为空，密码为空，返回false', ()=> {
    const user = {
      username: '12345678',
      password: ''
    };
    expect(validateLogin(user)).toBeFalsy();
  });
  it('用户名这个属性不存在，返回false', ()=> {
    const user = {
      password: '123456'
    };
    expect(validateLogin(user)).toBeFalsy();
  });
  it('密码这个属性不存在，返回false', ()=> {
    const user = {
      username: '12345678',
    };
    expect(validateLogin(user)).toBeFalsy();
  });
  it('用户名和密码都有值，返回true', ()=> {
    const user = {
      username: '1232321143214',
      password: '1213232'
    };
    expect(validateLogin(user)).toBeTruthy();
  });
});
