/**
 * Created by SONY on 2016/8/11.
 */
var db = require('./connect');
var User = require('../entity/user');

exports.find = function (req,res) {
    debugger;
    let username = req.body.username;
    let password = req.body.password;
    db.connect();
    User.findOne({username:username,password:password},function(err,users){
        console.log(users);
        if(err) throw err;
        res.send(users);
    });
};





exports.save = function (req,res) {
    var aym = new User({
        name:"cat",
        password:"123456",
        phone:"15678945623"
    });
    aym.save(function(err){
        if(err) throw err;
        res.send("success");
    });
};
