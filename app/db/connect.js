let mongoose = require("mongoose");

module.exports = {
  connect: function (mode, callback) {
    let url = 'mongodb://localhost/delicious-school-db';
    if (mode === 'test') {
      url = 'mongodb://localhost/delicious-school-mongodb-spec';
      console.log('--------test-------------');
    }
    console.log(url);
    mongoose.connect(url, callback);
  },
  close: function (callback) {
    mongoose.connection.close(callback);
  }
};
