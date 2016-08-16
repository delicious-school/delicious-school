/**
 * Created by SONY on 2016/8/10.
 */
var db = require("./connect");
var User  = require("../entity/user");

db.connect();
User.remove({},function(err,user){
    if(err) throw  err;
    console.log("delete users:");
    console.log(user);
});