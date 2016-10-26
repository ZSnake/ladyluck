var organization = require('../schemas/organization');
var project = require('../schemas/project');
var boom = require('boom');
var cloudinary = require('cloudinary');

exports.getOrganizations = {
  auth: false,
  handler: function(request, reply){
    var organizations = organization.find({});
    reply(organizations);
  }
}


exports.editOrganization = {
  auth: {
      mode:'try',
      strategy:'session',
      scope: ['admin']
  },
  handler: function(request, reply){
    
    if(request.payload.logo){
      var b = new Buffer(request.payload.logo);
      var s = b.toString('base64');

      cloudinary.uploader.upload("data:image/jpg;base64," + s, function(result) { 
        if(result.error)
          boom.notAcceptable('Image could not be uploaded');
        organization.update({_id:request.params.organizationId}, { $set:{
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
          ursacRegistrationDate: request.payload.ursacRegistrationDate,
          latitude: request.payload.latitude,
          longitude: request.payload.longitude, 
          intervieweeName: request.payload.intervieweeName,   
          interviewDate: request.payload.interviewDate,   
          interviewTime: request.payload.interviewTime, 
          otherOrgsInRegion: request.payload.otherOrgsInRegion,
          observations: request.payload.observations,
          logoUrl: result.url
        }},function(error) {
          if(error){
            boom.notAcceptable('Error updating project: ' + error);
          } else {
            if(request.payload.projects){
              var projects=JSON.parse(request.payload.projects);
              projects.forEach(function(p){
                
                
                var newProject = new project({
                  projectNumber: p.projectNumber ,  
                  organizationId: request.params.organizationId, 
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
                  abuseByOmission: p.abuseByOmission,
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
                  alternativeEducationCenter: p.alternativeEducationCenter,  
                  initialEducationAndEarlyEstimulationCenter: p.initialEducationAndEarlyEstimulationCenter, 
                  artisticFormationCenter: p.artisticFormationCenter,
                  vocationalEducationCenter: p.vocationalEducationCenter,
                  others: p.others
                });
                newProject.save(function(err){
                  if(err){
                    boom.notAcceptable('Invalid query. Error saving project: ' + newProject.name, err);
                  }
                });
              });
            }

          }
          return reply('ok');
        });
      });
    }else{
      organization.update({_id:request.params.organizationId}, {$set:{
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
        ursacRegistrationDate: request.payload.ursacRegistrationDate,
        latitude: request.payload.latitude,
        longitude: request.payload.longitude, 
        intervieweeName: request.payload.intervieweeName,   
        interviewDate: request.payload.interviewDate,   
        interviewTime: request.payload.interviewTime, 
        otherOrgsInRegion: request.payload.otherOrgsInRegion,
        observations: request.payload.observations
      }},function(error) {
        if(error){
          boom.notAcceptable('Error updating project: ' + err);
        } else {
          if(request.payload.projects){
            var projects=JSON.parse(request.payload.projects);
            projects.forEach(function(p){
            
              var newProject = new project({

                
                projectNumber: p.projectNumber ,  
                organizationId: request.params.organizationId, 
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
                abuseByOmission: p.abuseByOmission,
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
                alternativeEducationCenter: p.alternativeEducationCenter,  
                initialEducationAndEarlyEstimulationCenter: p.initialEducationAndEarlyEstimulationCenter, 
                artisticFormationCenter: p.artisticFormationCenter,
                vocationalEducationCenter: p.vocationalEducationCenter,
                others: p.others
              });
              newProject.save(function(err){
                if(err){
                  boom.notAcceptable('Invalid query. Error saving project: ' + newProject.name, err);
                }
              });
            });
          }

        }
        return reply('ok');
      });
    }
  }
}

exports.getOrganizationById = { //takes only one element by id
  handler: function(request, reply) {
    var Organization = organization.find({_id:request.params.organizationId})
    return reply(Organization);
  }
}

exports.createOrganization = {
  auth: {
      mode:'try',
      strategy:'session',
      scope: ['admin', 'orgUser']
  },

  handler: function(request, reply){
    
    
    var b = new Buffer(request.payload.logo);
    var s = b.toString('base64');
    cloudinary.uploader.upload("data:image/jpg;base64," + s, function(result) { 
      if(result.error)
        boom.notAcceptable('Image could not be uploaded');
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
        ursacRegistrationDate: request.payload.ursacRegistrationDate,
        latitude: request.payload.latitude,
        longitude: request.payload.longitude,	
        intervieweeName: request.payload.intervieweeName, 	
        interviewDate: request.payload.interviewDate, 	
        interviewTime: request.payload.interviewTime,	
        otherOrgsInRegion: request.payload.otherOrgsInRegion,
        observations: request.payload.observations,
        logoUrl: result.url
      });
      
      newOrganization.save(function(err, organization){
        console.log(request.payload);
        console.log(err);
        if(!err){

          console.log("2");
          if(request.payload.projects){
            console.log("3");
            var projects=JSON.parse(request.payload.projects);
            console.log("5");
            projects.forEach(function(p){
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
                abuseByOmission: p.abuseByOmission,
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
                alternativeEducationCenter: p.alternativeEducationCenter,	
                initialEducationAndEarlyEstimulationCenter: p.initialEducationAndEarlyEstimulationCenter,	
                artisticFormationCenter: p.artisticFormationCenter,
                vocationalEducationCenter: p.vocationalEducationCenter,
                others: p.others,
                typologyObservations: p.typologyObservations
              });
              
              newProject.save(function(err){
                if(err){
                  boom.notAcceptable('Invalid query. Error saving project: ' + newProject.name, err);
                }
              });
            });
          }
          return reply(organization);
        }
        else  
          boom.notAcceptable('Invalid query. Organization not created: ', err);
      });
    });
  }
}

exports.deleteOrganization = {
  auth: {
    mode: 'try',
    strategy: 'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    organization.remove({_id: request.params.organizationId}, function(err){
      if(err)
        boom.notAcceptable("Can't remove organization")

        
      project.remove({organizationId: request.params.organizationId}, function(){
        if(err)
          boom.notAcceptable("Can't remove the organization's projects");

        return reply("Organization and projects removed")
      });
    })
  }
}