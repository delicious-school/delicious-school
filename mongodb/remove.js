/**
 * Created by SONY on 2016/8/10.
 */
let db = require("./connect");
let User  = require("../entity/user");

db.connect();
User.remove({username:'12345678',password:'123456'},function(err,user){
    if(err) throw  err;
    console.log("delete users:");
    console.log(user);
});
