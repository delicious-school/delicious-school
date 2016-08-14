/**
 * Created by SONY on 2016/8/10.
 */
var db = require('./connect');
var User = require('../entity/user');
var Dish = require('../entity/dish');
var Dishes = require('../entity/dishes.json');
db.connect();
// var aym = new User({
//     username:"1",
//     password:"1"
// });

// aym.save(function(err){
//     if(err) throw err;
//     console.log("user saved");
//     db.close;
// });
