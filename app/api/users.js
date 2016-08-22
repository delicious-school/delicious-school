import express from 'express';
import User from '../db/entity/user';
import validate from '../../share/validate';
import findOneUser from './register/find-one-user';
import saveUser from './register/save-user';
const router = express.Router();

router.post('/', function (req, res, next) {
  const requestUser = {
    username: req.body.username,
    password: req.body.password
  };
  const isValidate = validate(requestUser);
  if (isValidate) {
    findOneUser(requestUser.username, function (err, exists) {
      if (err) return next(err);
      if (exists) {
        return res.sendStatus(409);
      }
      const newUser = new User(requestUser);
      saveUser(newUser, function (err) {
        if (err) return next(err);
        return res.sendStatus(201);
      });
    });
  } else {
    return res.sendStatus(400);
  }
});

export default router;
