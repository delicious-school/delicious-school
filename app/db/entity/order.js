const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  username: String,
  dishstore: String,
  dishname: String,
  dishprice: String,
  dishescount: String,
  orderstates: String
});

// the collection's name is `orders`
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
