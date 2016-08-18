import express from 'express';
import User from '../db/entity/user';
import validate from '../../share/validate';
const router = express.Router();


router.post('/', function (req, res, next) {
  const requestUser = {
    username: req.body.username,
    password: req.body.password
  };
  const isValidate = validate(requestUser);
  if (isValidate) {
    User.findOne({username: requestUser.username}, function (err, users) {
      if (err) return next(err);
      if (users) {
        return res.sendStatus(409);
      }
      const user = new User(requestUser);
      user.save(function (err) {
        if (err) return next(err);
        return res.sendStatus(201);
      });
    })
  }else{
  return res.sendStatus(400);}
});

export default router;
