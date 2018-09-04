const mongoose = require('mongoose');



var today = new Date();
var d = today.getDate();
var m = today.getMonth()+1; 
var y = today.getFullYear();


today = m + '/' + d + '/' + y;


const UserSessionSchema = new mongoose.Schema({

    userId: {
      type: String,
      default: ''
    },
    timestamp :{
      type : Date,
      default: Date.now()
    },
    isDelated :{
        type: Boolean,
        default: false
    }
});

//Create model
const UserSession = mongoose.model('UserSession',UserSessionSchema);

//export model
module.exports = UserSession;