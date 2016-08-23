import express from 'express';
import Dish from '../db/entity/dish';
import {getUsernameFromToken, validateToken} from './main/cookie-tool';

const router = express.Router();

router.post('/', function (req, res, next) {
  const token = req.cookies['token'];
  Dish.find({}, function (err, dishes) {
    if (err) throw next(err);
    validateToken(token, function (err, flag) {
      if (flag && dishes) {
        const username = getUsernameFromToken(token);
        res.send({dishes, username});
      } else {
        res.send(false);
      }
    });
  });
});
export default router;

