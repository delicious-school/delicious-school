
import User from '../../db/entity/user';

function saveUser(user,callback){
  user.save(callback);
}

export default saveUser;
