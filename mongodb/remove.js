/**
 * Created by SONY on 2016/8/10.
 */
let db = require("./connect");
let User  = require("../entity/user");

db.connect();
User.remove({},function(err,user){
    if(err) throw  err;
    console.log("delete users:");
    console.log(user);
});
