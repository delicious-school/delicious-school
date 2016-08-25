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
    console.log('------------isUpdate------' + isUpdate);
    if (isUpdate) res.send(true);
    else res.send(false);
  });

});

function updateStoreStatus(info, callback) {
  console.log('-------------updateStore---------');
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
  console.log(order+'-----------------this is order wait to save');
  saveOrder(order,function(err,status){
    if(err) return next(err);
    if(status){
      res.send(status);
    }
  })

});
function saveOrder(order,callback) {
  console.log('-----------saveorder----------');
  Order.find().sort({time: 1}).limit(1).exec((err, data)=> {
    console.log(data);
    if (err) return callback(err);
    if (data) {
      if (order.username === data[0].username) {
        order.status = data[0].status;
      }
      order.save(function (err, order) {
        if (err) return next(err);
        console.log('-----------gotosave=========');
        if (order) {
          console.log("save order");
        }
      });
    }
  });
}
//
// router.post('/people-status', function (req, res, next) {
//   const  username= req.body;
//   console.log(username);
//   Order.find(username).limit(1).exec((err,data)=>{
//     "use strict";
//     if(err) return next(err);
//     console.log(data);
//     if(data){
//       console.log(data[0].status);
//       res.send(data[0].status);
//     }
//   })
// });
export default router;

