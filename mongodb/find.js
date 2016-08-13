/**
 * Created by SONY on 2016/8/10.
 */
var db = require('./connect');
var User = require('../entity/user');
db.connect();
// User.find({},function(err,users){
//     if(err) throw  err;
//     console.log("All users");
//     console.log(users);
// });

 User.findOne({name:"ff"},function(err,users){
        if(err) throw  err;
        a = users.name;
        console.log(users);
    });

