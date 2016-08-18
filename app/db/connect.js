let mongoose = require("mongoose");

module.exports = {
  connect: function () {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/delicious-school-db');
  },
  close: function () {
    mongoose.close();
  }
};
