/**
 * Created by SONY on 2016/8/11.
 */
var db = require('./connect');
var User = require('../entity/user');
db.connect();
exports.find = function (req, res) {
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
}

















