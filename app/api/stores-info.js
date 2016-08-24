import express from 'express';
import Store from '../db/entity/store';
const router = express.Router();

router.post('/', function (req, res, next) {
  console.log('================storesInfo================');
  const storename = req.body;
  console.log(storename.storename + '================storename=========');
  Store.findOne(storename, function (err, storesInfo) {
    if (err) return next(err);
    res.send(storesInfo);
  });
});
export default router;

