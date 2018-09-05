const mongoose = require('mongoose');
const Users = require('./../../models/Users');
const UserSession = require('./../../models/UserSession');
const bcrypt = require('bcrypt');

module.exports = function(app){

    app.post('/api/account/signup',(req,res,next)=>{
                
        const { body } = req;

        const {
          firstName,
          password
        } = body;

        let {
          lastName,
          email
        
        } = body;

        console.log(body);
        

        email = email.toLowerCase();
        lastName = lastName.toUpperCase();

        if (firstName == ""){
          return res.send({
            success: false,
            message: "firstName can not be blank"
          })
        }

        if (lastName == ""){
          return res.send({
            success: false,
            message: "lastName can not be blank"
          })
        }

        if (email == ""){
          return res.send({
            success: false,
            message: "email can not be blank"
          })
        }

        if (password == ""){
          return res.send({
            success: false,
            message: "password can not be blank"
          })
        }

        Users.find({
          Email : email
        },(err,priviousUsers)=>{
          if(err){
             return res.send({
               success : false,
               message :'Error Server error !'
              })
            }

          if(priviousUsers.length > 0){
            return res.send({
                success : false,
                message :'Error email already exist !'
              
            })
          }
          
        
                
        newUser = new Users();
        newUser.FirstName = firstName;
        newUser.LastName = lastName.toUpperCase();
        newUser.Email = email
        newUser.Password = newUser.generateHash(password);
        newUser.save((err,user)=>{
          if (err) {
            return res.send(
              {
                success: false,
                message: 'Erreur: Serveur ne marche pas :/'
              });
    
          }
            
           
            return res.send(
              {
                success: true,
                message: 'Signed up'

              });
        });
    });
  });

    app.post('/api/account/signin',(req,res,next)=>{
                   
      const {body} = req;

      const {password} = body;
      let {email} = body;

      email = email.toLowerCase();

      console.log(body);
      

      if (email==""){
        return res.send({
          success: false,
          message: "email can not be blank"
        })
      }

      if (password==""){
        return res.send({
          success: false,
          message: "password can not be blank"
        })
      }

      Users.find({
        Email : email
      },(err,users)=>{
        if(err){
          console.log('err2'+err);
          
            return res.send({
             success: false,
              message: 'Error: Server error !'
            })
        }
        if(users.length != 1){
          return res.send({
            success: false,
            message:"Error: Account doesn't existe!"
          })
        }
        
        
        const user = users[0];
        console.log('----------');
        
        console.log(user);
        

        if(!bcrypt.compareSync(password,user.Password)){
                 
          return res.send(
            {
              success: false,
              message: 'Error: Invalid password! '

            });
        }

        
        //Otherwise 

        
        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err,doc)=>{
          if(err){
            console.log(err);
            
            return res.send( 
              {
              success: false,
              message: 'Error: Error server '

            });
          }
          return res.send(
            {
              success: true,
              message: 'Signed in',
              token: doc._id

            });
        })



      });
 
    });

    app.post('/api/account/logout',(req,res,next)=>{});

    app.get('/users', function(req, res){
        Users.find()
        .exec()
        .then((user) => {
            console.log(user);
            res.json(user);
        })
        .catch((err) => next(err));
    });
}


