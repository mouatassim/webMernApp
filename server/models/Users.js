const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;


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

UserSchema.methods.validPassword = (Password)=>{
  return bcrypt.compareSync(Password,this.Password);
}
//Create model
const Users = mongoose.model('Users',UserSchema);

//export model
module.exports = Users;