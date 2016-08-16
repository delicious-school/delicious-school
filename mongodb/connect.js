/**
 * Created by SONY on 2016/8/11.
 */
let mongoose = require("mongoose");

module.exports = {
    connect : function(){
        mongoose.connect('mongodb://localhost/delicious-school-db');
    },
    close :function () {
        mongoose.close();
    }
}
