/**
 * Created by yoyo on 16-8-13.
 */
/**
 * Created by SONY on 2016/8/11.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dishSchema = new Schema({
    dishname: String,
    dishprice: String,
    dishstore: String
});

// the collection's name is `dishs`
var Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
