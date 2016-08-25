import express from 'express';
import Store from '../db/entity/store';
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

export default router;

