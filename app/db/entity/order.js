let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let orderSchema = new Schema({
  username: String,
  dishstore: String,
  dishname: String,
  dishprice: String,
  dishescount: String,
  orderstates: String
});

// the collection's name is `orders`
let Order = mongoose.model('Order', orderSchema);

module.exports = Order;
