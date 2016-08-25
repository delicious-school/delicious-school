import express from 'express';
import Store from '../db/entity/store';
const router = express.Router();

router.post('/', function (req, res, next) {
  const  storename = req.body;
  Store.findOne(storename,function (err,storeInfo) {
    if (err) throw next(err);
    if(storeInfo){
      res.send(storeInfo);
    }else {
      res.send(false);
    }
  });
});


router.post('/update-status', function (req, res, next) {
  const  id = req.body._id;
  const status=req.body.status+1;
  Store.update({_id:id,status:status},function(err,store){
    console.log(store);
    if(err) return next(err);
    if(store) res.send(true);
    else res.send(false);
  });

});
export default router;

