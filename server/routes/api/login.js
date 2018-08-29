const mongoose = require('mongoose');
const Users = require('./../../models/Users');

module.exports = function(app){

    app.post('/postUser',(req,res,next)=>{
                
        const data = req.body;

        console.log(data);
        
                
        newUser = new Users();
        newUser.FirstName = data.firstName;
        newUser.LastName = data.lastName.toUpperCase();
        newUser.Email = data.email.toLowerCase();;
        newUser.Password = newUser.generateHash(data.password);
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


