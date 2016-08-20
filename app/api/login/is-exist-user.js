import User from '../../db/entity/user';

function isExistUsername(user, callback) {
  User.findOne(user, function (err, user) {
    if (err) return callback(err);
    if (user) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  })
}

export default isExistUsername;


