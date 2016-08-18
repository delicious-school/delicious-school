/**
 * Created by yoyo on 16-8-18.
 */

import express from 'express';
const router = express.Router();
let User = require('../../entity/user');

router.post('/',function(req,res,next){
  const requestUser = {
    username: req.body.username,
    password: req.body.password
  };
  let isValidate = validate(requestUser);
  console.log(isValidate);
  if (isValidate) {
    User.findOne(requestUser, function (err, users) {
      if (err) return next(err);
      if (users) {
        res.send(409);
      } else {
        const user = new User({username: requestUser.username, password: requestUser.password});
        user.save(function (err) {
          if (err) return next(err);
          res.send(201);
        });
      }
    })
  } else {
    res.send(400);
  }
});
// exports.register = function (req, res) {
//   const requestUser = {
//     username: req.body.username,
//     password: req.body.password
//   };
//   let isValidate = validate(requestUser);
//   console.log(isValidate);
//   if (isValidate) {
//     User.findOne(requestUser, function (err, users) {
//       if (err) throw err;
//       if (users) {
//         res.send(409);
//       } else {
//         const user = new User({username: requestUser.username, password: requestUser.password});
//         user.save(function (err) {
//           if (err) throw err;
//           res.send(201);
//         });
//       }
//     })
//   } else {
//     res.send(400);
//   }
// };

function validate(user) {
  if (user.username.length === 8 && (user.password.length <= 10 && user.password.length >= 6)) {
    console.log(/^[0-9]*$/.test(user.username)+'         0000000000000000000000000000000');
    if (/^[0-9]*$/.test(user.username)) {
      return true;
    }
  }
  return false;
}

export default router;
