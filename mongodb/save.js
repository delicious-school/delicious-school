/**
 * Created by SONY on 2016/8/10.
 */
var db = require('./connect');
var User = require('../entity/user');
var Dish = require('../entity/dish');
var Dishes = require('../entity/dishes.json');
var Order = require('../entity/order');

db.connect();
// var Order = new Schema;
var orderSchema = new Order({
    username: 'liuliu',
    dishstore: '1号店',
    dishname: '虾仁西兰花',
    dishprice: '12',
    dishescount: '1',
    orderstates: '1'
});

orderSchema.save(function (err) {
    if (err) throw err;
    console.log("saved");
    db.close;
});
