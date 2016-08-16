/**
 * Created by SONY on 2016/8/10.
 */
let db = require('./connect');
let User = require('../entity/user');
let Dish = require('../entity/dish');
let Dishes = require('../entity/dishes.json');
let Order = require('../entity/order');

db.connect();
// let Order = new Schema;
let orderSchema = new Order({
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
