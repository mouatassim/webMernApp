const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: {
      type: String,
      default: "Strenger"
    },
    Password:{
        type: String,
        default: "password"
    }
  });
  
//Create model
const Users = mongoose.model('Users',UserSchema);

//export model
module.exports = Users;