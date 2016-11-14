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
      //scope: ['admin']
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

  exports.deleteUser = {
    auth: {
      mode: 'try',
      strategy: 'session',
      //scope: ['admin']
    },
    handler: function(request, reply){
      user.remove({_id: request.params.userId}, function(err){
        if(err)
          boom.notAcceptable('User could not be deleted ' + err);
        reply('user removed');
      });
    }
  }

  exports.editUser = {
    auth: {
      mode: 'try',
      strategy: 'session',
      //scope: ['admin']
    },
    handler: function(request, reply){
      var updateArgument = {};
      if(request.payload.password){
        updateArgument = {$set: {
                                  username: request.payload.username,
                                  password: SHA3(request.payload.password),
                                  scope: request.payload.scope
                                }
                        }
      }else{
        updateArgument = {$set: {
                                  username: request.payload.username,
                                  scope: request.payload.scope
                                }
                          }
      }
      user.update({_id: request.params.userId},updateArgument, function(err){
        if(err)
          boom.notAcceptable('User could not be updated: '+ err);
        reply('user modified');
      })
    }
  }
