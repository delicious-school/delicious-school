/**
 * Created by fuhong on 8/24/16.
 */
import express from 'express';
import {getUsernameFromToken, validateToken} from './main/cookie-tool';

const router = express.Router();

router.post('/', function (req, res, next) {
  const token = req.cookies['token'];
  validateToken(token, function (err, flag) {
    if (err) return  next(err);
    if (flag) {
      const username = getUsernameFromToken(token);
      res.send({username});
    } else {
      res.send(false);
    }
  });
});
export default router;

