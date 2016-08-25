import express from 'express';
import Store from '../db/entity/store';
import Order from '../db/entity/order';
const router = express.Router();

router.post('/', function (req, res, next) {
  const storename = req.body;
  Store.findOne(storename, function (err, storeInfo) {
    if (err) return next(err);
    if (storeInfo) {
      res.send(storeInfo);
    } else {
      res.send(false);
    }
  });
});

router.post('/update-status', function (req, res, next) {
  const { storeInfo} = req.body;
  const status = storeInfo.status + 1;
  updateStoreStatus({_id: storeInfo._id, status: status}, function (err, isUpdate) {
    if (err) return next(err);
    if (isUpdate) res.send(true);
    else res.send(false);
  });

});

function updateStoreStatus(info, callback) {
  Store.update(info, function (err, store) {
    if (err) return callback(err);
    if (store) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  });
}

router.post('/people-status',function(req,res,next){
  const {username,mealInfo,storeInfo,count,totalPrice}=req.body;
  const date = new Date();
  const order = new Order({
    time: date,
    username: username,
    storename: storeInfo.storename,
    dishname: mealInfo.dishname,
    dishprice: mealInfo.dishprice,
    dishcount: count,
    dishtotalprice: totalPrice,
    status:0
  });
  saveOrder(order, function (err, status) {
    if (err) return next(err);
    if (status) {
      res.json(status);
    }
  });

});
function saveOrder(order,callback) {
  Order.find({storename:order.storename}).sort({time:-1}).limit(1).exec((err, data)=> {
    if (err) return callback(err);
    if (data) {
      if (order.username === data[0].username) {
        order.status = data[0].status;
      }else{
        order.status = data[0].status+1;
      }
      order.save(function (err, data) {
        if (err) return callback(err);
        if (data) {
          const state = data.status;
          return callback(null,state);
        }
      });
    }
  });
}
export default router;

