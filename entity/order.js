/**
 * Created by yoyo on 16-8-13.
 */
/**
 * Created by SONY on 2016/8/11.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var orderSchema = new Schema({
    username:String,
    dishstore:String,
    dishname:String,
    dishprice:String,
    dishescount:String,
    orderstates:String
});

// the collection's name is `orders`
var Order = mongoose.model('Order', orderSchema);

module.exports = Order;
