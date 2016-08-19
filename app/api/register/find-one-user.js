
import User from '../../db/entity/user';

function findOneUser(username,callback){
  User.findOne({username},function(err,user){
    if(err) return callback(err);
    if(user){
       callback(null,true);
    }else{
      callback(null,false);
    }
  })
}

export default findOneUser;
