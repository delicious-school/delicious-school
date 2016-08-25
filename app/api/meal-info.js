import express from 'express';
import Dish from '../db/entity/dish';
const router = express.Router();

router.post('/', function (req, res, next) {
  const  id = req.body.id;
  Dish.findOne({_id:id},function (err,mealInfo) {
    if (err) throw next(err);
    if(mealInfo){
      res.send(mealInfo);
    }else {
      res.send(false);
    }
  });
});

router.get('/', function (req, res, next) {
  const  id = req.query.id;
  Dish.findOne({_id:id},function (err,mealInfo) {
    if (err) throw next(err);
    if(mealInfo){
      res.send(mealInfo);
    }else {
      res.send(false);
    }
  });
});
export default router;
