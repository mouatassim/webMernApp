const mongoose = require('mongoose');
const Users = require('./../../models/Users');

module.exports = function(app){

    app.post('/newuser',(req,res,next)=>{
        console.log("1");
        
        var newUser = new Users();

        newUser.Username = "Nour ElHouda";
        newUser.Password = "Ziad";
         newUser.save((err,user)=>{
          if (err) {
            return res.send(
              {
                success: false,
                message: 'Erreur: Serveur ne marche pas :/'
              });
    
          }
            console.log("done");
            
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

