var organization = require('../schemas/organization');
var project = require('../schemas/project');
var boom = require('boom');

exports.getOrganizations = {
  handler: function(request, reply){
    var organizations = organization.find({});
    reply(organizations);
  }
}

exports.createOrganization = {
  handler: function(request, reply){
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
          ursacRegistrationDate: request.payload.ursacrRegistrationDate,
          latitude: request.payload.latitude,
          longitude: request.payload.longitude,	
          intervieweeName: request.payload.intervieweeName, 	
          interviewDate: request.payload.interviewDate, 	
          interviewTime: request.payload.interviewTime,	
          otherOrgsInRegion: request.payload.otherOrgsInRegion,
          observations: request.payload.observations
      });
    newOrganization.save(function(err, organization){
      if(!err){
        if(request.payload.projects){
          request.payload.projects.foreach(function(p){
            var newProject = new project({
              projectNumber: p.projectNumber ,	
              organizationId: organization._id,	
              name: p.name, 
              description: p.description,	
              duration: p.duration,
              scope: p.scope,	
              childrenProfile: p.childrenProfile,	
              ages: p.ages,
              totalSpace: p.totalSpace,	
              availableSpace: p.availableSpace,	
              coordinatorName: p.coordinatorName,	
              coordinatorPhone: p.coordinatorPhone,	
              coordinatorEmail: p.coordinatorEmail,
              coordinatorCelPhone: p.coordinatorCelPhone,
              postalCode: p.postalCode,
              department: p.department,
              observations: p.observations,
              abandonment: p.abandonment,	
              legalRepresentativeAbsence: p.legalRepresentativeAbsence,	
              abuseBySupression: p.abuseBySupression,	
              abuseByTransgression: p.abuseByTransgression,	
              lackOfBasicNeeds: p.lackOfBasicNeeds,	
              threatToHeritage: p.threatToHeritage,	
              addiction: p.addiction,	
              sexualFreedomVictims: p.sexualFreedomVictims,	
              sexualHarassmentVictims: p.sexualHarassmentVictims,	
              procuring: p.procuring,	
              trafficking: p.trafficking, 	
              publicSexualExposure: p.publicSexualExposure,	
              pornography: p.pornography,
              sexualTurism: p.sexualTurism,	
              criminalRecruitmentRisk: p.criminalRecruitmentRisk,	
              begging: p.begging,	
              economicExploitation: p.economicExploitation,	
              childAbduction: p.childAbduction,	
              childrenDinning: p.childrenDinning,	
              preBasicEducationCenter: p.preBasicEducationCenter,	
              sportEducationCenter: p.sportEducationCenter,	
              alternativeEducationCenter: Boolean,	
              initialEducationAndEarlyEstimulationCenter: p.initialEducationAndEarlyEstimulationCenter,	
              artisticFormationCenter: p.artisticFormationCenter,
              others: p.others
            });
            newProject.save(function(err){
              if(err){
                console.log("Error saving project");
                boom.badRequest('Invalid query. Error saving project: ' + newProject.name, err);
              }
            });
          });
        }
      }
      else  
        boom.badRequest('Invalid query. Organization not created: ', err);
    });
  }
}
