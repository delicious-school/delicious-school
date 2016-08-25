const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  time: Date,
  username: String,
  storename: String,
  dishname: String,
  dishprice: String,
  dishcount: Number,
  dishtotalprice: Number,
  status: Number
});

// the collection's name is `orders`
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
