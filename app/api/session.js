import express from 'express';
import isExistUser from './login/is-exist-user';

const router = express.Router();

router.post('/', function (req, res, next) {
  const requestUser = {
    username: req.body.username,
    password: req.body.password
  };

  const isValidate = validate(requestUser);

  if (isValidate) {
    isExistUser(requestUser, function (err, state) {
      if (err) return next(err);
      if (state) {
        return res.sendStatus(201);
      }
      return res.sendStatus(401);
    })
  } else {
    return res.sendStatus(400);
  }
});

export default router;
