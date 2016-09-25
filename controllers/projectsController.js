var project = require('../schemas/project');
var boom = require('boom');


exports.getProjects = {
	handler: function(request, reply){
		var projects = project.find({organizationId : request.params.organizationId});
		reply(projects);
	}
}

exports.deleteProjectsById = {
	handler: function (request, reply) {
		
		var Project= project.remove({_id:request.params.projectId}, function(err){
			if (err) {boom.notAcceptable("can't delete");
		} 
		return reply(request.params.projectId)

	})
		
	}
}

exports.getProjectsById = {
	handler: function (request, reply) {
		var Project = project.find({_id:request.params.projectId})
		return reply(Project)
	}

}

exports.editProject = {
	handler: function(request, reply) {
		project.update({_id:request.params.projectId},{$set:{
			projectNumber : request.payload.projectNumber,	
			organizationId : request.payload.organizationId,	
			name : request.payload.name, 
			description : request.payload.description,	
			duration : request.payload.duration,
			scope : request.payload.scope,	
			childrenProfile : request.payload.childrenProfile,	
			ages : request.payload.ages,
			totalSpace : request.payload.totalSpace,	
			availableSpace : request.payload.availableSpace,	
			coordinatorName : request.payload.coordinatorName,	
			coordinatorPhone : request.payload.coordinatorPhone,	
			coordinatorEmail : request.payload.coordinatorEmail,
			coordinatorCelPhone : request.payload.coordinatorCelPhone,
			postalCode : request.payload.postalCode,
			department : request.payload.department,
			observations : request.payload.observations,
			abandonment : request.payload.abandonment,	
			legalRepresentativeAbsence : request.payload.legalRepresentativeAbsence,
			abuseByOmission : request.payload.abuseByOmission,	
			abuseBySupression : request.payload.abuseBySupression,	
			abuseByTransgression : request.payload.abuseByTransgression,	
			lackOfBasicNeeds : request.payload.lackOfBasicNeeds,	
			threatToHeritage : request.payload.threatToHeritage,	
			addiction : request.payload.addiction,	
			sexualFreedomVictims : request.payload.sexualFreedomVictims,	
			sexualHarassmentVictims : request.payload.sexualHarassmentVictims,	
			procuring : request.payload.procuring,	
			trafficking : request.payload.trafficking, 	
			publicSexualExposure : request.payload.publicSexualExposure,	
			pornography : request.payload.pornography,
			sexualTurism : request.payload.sexualTurism,	
			criminalRecruitmentRisk : request.payload.criminalRecruitmentRisk,	
			begging : request.payload.begging,	
			economicExploitation : request.payload.economicExploitation,	
			childAbduction : request.payload.childAbduction,	
			childrenDinning : request.payload.childrenDinning,	
			preBasicEducationCenter : request.payload.preBasicEducationCenter,	
			sportEducationCenter : request.payload.sportEducationCenter,	
			alternativeEducationCenter : request.payload.alternativeEducationCenter,	
			initialEducationAndEarlyEstimulationCenter : request.payload.initialEducationAndEarlyEstimulationCenter,	
			artisticFormationCenter : request.payload.artisticFormationCenter,
			vocationalEducationCenter : request.payload.vocationalEducationCenter,
			others : request.payload.others,
			tipologyObservations : request.payload.tipologyObservations
		}},function(error) {
			if(error){
				boom.badRequest('Error updating project: ' + err);
			}
			return reply('ok');
		});
	}
}

