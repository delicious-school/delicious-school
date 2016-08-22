import express from 'express';
import isExistUser from './login/is-exist-user';
import validateLogin from './login/validate-login';
import {generateToken} from './main/cookie-tool';
const router = express.Router();

router.post('/', function (req, res, next) {
  const requestUser = {
    username: req.body.username,
    password: req.body.password
  };
  const isValidate = validateLogin(requestUser);
  if (isValidate) {
    isExistUser(requestUser, function (err, exists) {
      if (err) return next(err);
      if (exists) {
        res.cookie('token', generateToken(requestUser.username,requestUser.password));
        return res.sendStatus(201);
      }
      return res.sendStatus(401);
    });
  } else {
    return res.sendStatus(400);
  }
});

export default router;
