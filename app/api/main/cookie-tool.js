'use strict';
import _ from 'lodash';
import sha1 from 'sha1';
import User from '../../db/entity/user';

function generateToken(username, password) {
  return username + ':' + sha1(password);
}

function getUsernameFromToken(token) {
  const separatorIndex = _.lastIndexOf(token, ':');
  return token.substring(0, separatorIndex);
}

function validateToken(token,callback) {
  if (token === null || token.length === 0 || !token.includes(':')) {
    return false;
  }else{
    const username = getUsernameFromToken(token);
    findUser(username, function (err,user) {
      if (err)  return callback( err);
      if (user) {
        const {password} = user;
        const newToken = generateToken(username, password) ;
        callback(err, newToken === token);
      }
    });
  }

}






function findUser(username, callback) {
  User.findOne({username}, function (err, user) {
    if (err) return callback(err);
    if (user) {
      callback(null, user);
    } else {
      callback(null, false);
    }
  })
}
module.exports = {getUsernameFromToken,validateToken,generateToken};
