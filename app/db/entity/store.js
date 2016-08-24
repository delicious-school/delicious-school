
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
  storename: String,
  storelocation: String,
  storephone:String,
  status:Number
});

// the collection's name is `stores`
const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
