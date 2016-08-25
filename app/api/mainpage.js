import express from 'express';
import Dish from '../db/entity/dish';
const router = express.Router();

router.post('/', function (req, res, next) {
  Dish.find({}, function (err, dishes) {
    if (err) return next(err);
    if (dishes) {
      res.send({dishes});
    } else {
      res.send(false);
    }
  });
});

router.get('/storeOfDishes/:dishstore',function (req,res,next) {
  const dishstore = req.params.dishstore;
  Dish.find({dishstore:dishstore},function (err,storeOfDishes) {
    if (err) return next(err);
    if(storeOfDishes){
      return res.send({storeOfDishes});
    }
    return res.send(false);
  });
});
export default router;

