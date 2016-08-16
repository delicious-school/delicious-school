/**
 * Created by SONY on 2016/8/10.
 */
var db = require('./connect');
var User = require('../entity/user');
db.connect();

User.findOne({name: "ff"}, function (err, users) {
    if (err) throw  err;
    a = users.name;
});

