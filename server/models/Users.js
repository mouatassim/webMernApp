const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


var today = new Date();
var d = today.getDate();
var m = today.getMonth()+1; 
var y = today.getFullYear();


today = m + '/' + d + '/' + y;


const UserSchema = new mongoose.Schema({
    FirstName: {
      type: String,
      default: ""
    },
    LastName:{
      type: String,
      default: ""
  },
    Email: {
      type: String,
      default: ""
    },
    Password: {
      type: String,
      default: "Strenger"
    },
    DateOfBirth :{
      type : Date,
      default: today
    },

    Gender:{
      type: String,
      default: 'undefined gender'
    }

  });
  
//Methods
UserSchema.methods.generateHash=(Password)=>{
  return bcrypt.hashSync(Password,bcrypt.genSaltSync(8),null);
}  

UserSchema.methods.validPassword = (password)=>{
  return bcrypt.compareSync(password,this.Password);
}
//Create model
const Users = mongoose.model('Users',UserSchema);

//export model
module.exports = Users;