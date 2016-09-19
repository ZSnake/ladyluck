var user = require('../schemas/user');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');

exports.createUser = {
    auth: {
      mode:'try',
      strategy:'session'
    },
    handler: function(request, reply) {
       var newUser = new user({
         username : request.payload.username,
         password : SHA3(request.payload.password),
         scope : request.payload.scope
       });
       newUser.save(function (err) {
         console.log(err);
         if(err){
          return reply(boom.notAcceptable('Username must be unique: ' + err));
         }else{
           return reply('ok');
         };
      });
    }
  };

  exports.getUsers = {
    auth: {
      mode: 'try',
      strategy: 'session',
      scope: ['admin', 'orgUser']
    },
    handler: function(request, reply){
      user.find({}, 'username _id scope', function(err, result){
        if(err){
          boom.notAcceptable('User not found');
        }
        reply(result);
      });
    }
  }
