var organization = require('../schemas/organization');

exports.getOrganizations = {
  auth: {
    mode:'required',
    strategy:'session',
  },
  handler: function(request, reply){
    var organizations = organization.find({});
    reply(organizations);
  }
}

exports.createOrganization = {
  auth: {
    mode:'required',
    strategy:'session',
  },
  handler: function(request, reply){
    console.log(request.payload.observations);
    var newOrganization = new organization({
          orgNumber : request.payload.orgNumber, 	
          photo : request.payload.photo,	
          orgName: request.payload.orgName,	
          acronym: request.payload.acronym,	
          postal: request.payload.postal,	
          department: request.payload.department,	
          municipality: request.payload.municipality,	
          village: request.payload.village,
          community: request.payload.community,	
          sector: request.payload.sector,	
          mission: request.payload.mission,	
          vision: request.payload.vision,	
          market: request.payload.market,	
          webPage: request.payload.webPage,	
          orgPhone: request.payload.orgPhone,	
          orgCelPhone: request.payload.orgCelPhone,
          orgSocialNetwork: request.payload.orgSocialNetwork,	
          orgEmail: request.payload.orgEmail,	
          directorName: request.payload.directorName,	
          directorEmail: request.payload.directorEmail,
          directorPhone: request.payload.directorPhone,	
          directorCelPhone: request.payload.directorCelPhone,	
          orgResolutionNumber: request.payload.orgResolutionNumber, 	
          orgResolutionDate: request.payload.orgResolutionDate, 	
          legalRepresentativeName: request.payload.legalRepresentativeName,	
          ursacRegistrationNumber: request.payload.ursacRegistrationNumber,
          ursacrRegistrationDate: request.payload.ursacrRegistrationDate,
          latitude: request.payload.latitude,
          longitude: request.payload.longitude,	
          intervieweeName: request.payload.intervieweeName, 	
          interviewDate: request.payload.interviewDate, 	
          interviewTime: request.payload.interviewTime,	
          otherOrgsInRegion: request.payload.otherOrgsInRegion,
          observations: request.payload.observations
      });
      
    //console.log(newOrganization);
    
    newOrganization.save(function(err){
      if(!err)
        console.log('organization saved');
      else
        console.log(err);
    });
    
    return reply('ok');
  }
}
