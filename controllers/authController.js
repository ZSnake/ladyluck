var joi = require('joi');
var boom = require('boom');
var user = require('../schemas/user');
var SHA3 = require("crypto-js/sha3");

exports.login = {
    auth: false,
    validate: {
      payload: {
        username: joi.string().required(),
        password: joi.string().min(2).max(200).required()
      }
    },
    handler: function(request, reply) {
      var password = String(SHA3(request.payload.password));
      user.find({username: request.payload.username, password: password}, function(err, user){
          if(!err){
            if(user.length > 0){
              request.cookieAuth.set(user[0]);
              return reply({_id: user[0]._id, username: user[0].username, scope: user[0].scope[0], flog: user[0].flog});
            }
            return reply(boom.unauthorized('Wrong email or password'));
          }
          return reply(boom.notAcceptable('Error Executing Query'));
      });
    }
};
exports.logout = {
    auth: false,  
    handler: function(request, reply) {
      request.cookieAuth.clear();
      return reply('Logout Successful!');
    }
  };
