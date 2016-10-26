var boom = require('boom');
var log = require('../schemas/log');

exports.createLog = {
  auth: {
      mode:'try',
      strategy:'session',
      scope: ['admin', 'orgUser']
  },
  handler: function(request, reply) {
    var newLog = new log({
      action: request.payload.action,
      timestamp: request.payload.timestamp,
      userId: request.payload.userId
    });
    newLog.save(function(err, log){
      if(!err){
        return reply(log);
      }else  
          boom.notAcceptable('Invalid query. log not created: ', err);
    });
  }
};

exports.getLogs = {
  auth: {
    mode: 'try',
    strategy: 'session'
  },
  handler: function(request, reply){    
    var logs = log.find({});
    reply(logs);
  }
};