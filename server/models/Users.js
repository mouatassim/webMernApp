const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const date = new Date("1994-04-26T17:00:00Z");



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
      default: this.date
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