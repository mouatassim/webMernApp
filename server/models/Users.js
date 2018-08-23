const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FirstName: {
      type: String,
      default: "Strenger"
    },
    LastName:{
        type: String,
        default: "password"
    }
  });
  
//Create model
const Users = mongoose.model('Users',UserSchema);

//export model
module.exports = Users;