/**
 * Created by SONY on 2016/8/10.
 */
var db = require("./connect");
var User  = require("../entity/user");

db.connect();
User.update({age:"33",name:" aaa"},function(err,user){
if(err) throw  err;
    console.log("update user:");
    console.log(user);
});