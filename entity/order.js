/**
 * Created by yoyo on 16-8-13.
 */
/**
 * Created by SONY on 2016/8/11.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var orderSchema = new Schema({
    dishname:String,
    dishprice:String,
    dishstore:String,
    orderstates:String,
    dishescount:String
});

// the collection's name is `orders`
var Dish = mongoose.model('Order', orderSchema);

module.exports = Dish;
