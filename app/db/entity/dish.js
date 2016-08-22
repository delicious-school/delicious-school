const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dishSchema = new Schema({
  dishname: String,
  dishprice: String,
  dishstore: String,
  dishpicture: String
});

// the collection's name is `dishes`
const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
