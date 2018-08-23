const mongoose = require('mongoose');
const Users = require('./../../models/Users');

module.exports = function(app){

    app.post('/postUser',(req,res,next)=>{
                
        const data = req.body;
                
        newUser = new Users();
        newUser.FirstName = data.firstName;
        newUser.LastName = data.lastName;
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


