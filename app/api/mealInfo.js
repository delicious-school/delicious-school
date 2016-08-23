import express from 'express';
import Dish from '../db/entity/dish';
import Store from '../db/entity/store';
import {getUsernameFromToken} from './main/cookie-tool';

const router = express.Router();

router.post('/', function (req, res, next) {
  const id = req.body.id;
  const token = req.cookies['token'];
  const userName = getUsernameFromToken(token);
  Dish.findOne({_id: id}, function (err, mealInfo) {
    if (err) throw err;
    Store.findOne({storename:mealInfo.dishstore},function(err,storeInfo){
      if(err) throw  err;
      console.log(userName + '   ' + mealInfo + '   ' + storeInfo);
      res.send({userName,mealInfo,storeInfo});
    });
  });
});

export default router;
