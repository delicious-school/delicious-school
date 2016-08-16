/**
 * Created by SONY on 2016/8/11.
 */


let db = require('./connect');
let User = require('../entity/user');
let Order = require('../entity/order');
import Dish from '../entity/dish';
db.connect();

exports.findUser = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    User.findOne({username: username, password: password}, function (err, users) {
        if (err) throw err;
        res.send(users);

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
            res.send(dishes);
        } else {
            res.send(false);
        }
    })
};
exports.finsDishInfoById = function (req, res) {
    let id = req.body.id;
    Dish.findOne({_id: id}, function (err, dishes) {
        if (err) throw err;
        res.send(dishes);
    })
};
exports.saveOrder = function (req, res) {
    //计算点菜人数，标记状态，存入数据库-----wait to do
    const order = new Order(req.body);
    console.log(order);
    order.save(function (err) {
        if (err) {
            res.send(false);
        }
        res.send(true);
    })
};


















