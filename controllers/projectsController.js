var project = require('../schemas/project');
var boom = require('boom');


exports.getProjects = {
  handler: function(request, reply){
    var projects = project.find({organizationId : request.params.organizationId});
    reply(projects);
  }
}

