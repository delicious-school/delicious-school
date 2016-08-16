/**
 * Created by SONY on 2016/8/11.
 */
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let dishSchema = new Schema({
    dishname: String,
    dishprice: String,
    dishstore: String
});

// the collection's name is `dishes`
let Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
