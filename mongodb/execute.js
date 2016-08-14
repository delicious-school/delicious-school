/**
 * Created by SONY on 2016/8/11.
 */


var db = require('./connect');
var User = require('../entity/user');
var Order = require('../entity/order');
import Dish from '../entity/dish';
db.connect();
exports.findUser = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    User.findOne({username: username, password: password}, function (err, users) {
        console.log(users);
        if (err) throw err;
        res.send(users);
        console.log('meiyou send');

    });
};
exports.register = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    User.findOne({username: username, password: password}, function (err, users) {
        if (err) throw err;
        if (users) {
            res.send(false);
        } else {
            const user = new User({username: username, password: password});
            user.save(function (err) {
                if (err) throw err;
                res.send(true);
            });
        }
    })
};
exports.findDish = function (req, res) {
    Dish.find({}, function (err, dishes) {
        if (err) throw err;
        if (dishes) {
            console.log(dishes);
            res.send(dishes);
        } else {
            res.send(false);
        }
    })
};
exports.finsDishInfoById = function (req, res) {
    let dishname = req.body.dishname;
    console.log(dishname + "+++++++++++++");
    Dish.findOne({dishname: dishname}, function (err, dishes) {
        // Dish.findOne({_id:req.body.dishId},function(err, dishes){
        if (err) throw err;
        console.log(dishes);
        res.send(dishes);
    })
};
exports.saveOrder = function (req, res) {
    console.log('saveOrder++++++++++++++++');
    //计算点菜人数，标记状态，存入数据库
    // const order =new Order({
    //         dishname: this.state.mealInfo.dishname,
    //         dishprice: this.state.mealInfo.dishprice,
    //         dishstore: this.state.mealInfo.dishstore，
    //         orderstates:'waiting',
    //         dishescount:count
    //     }
    // );
    // order.save(function(err){
    //     if (err) {
    //         res.send(false)
    //     }else {
    //         res.send(true);
    //     }
    // })
    res.send(true);
};


















