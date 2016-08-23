var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    projectNumber: Number ,	
    organizationId: String,	
    name: String, 
    description: String,	
    duration: Number,
    scope: String,	
    childrenProfile: String,	
    ages: String,
    totalSpace: Number,	
    availableSpace: Number,	
    coordinatorName: String,	
    coordinatorPhone: String,	
    coordinatorEmail: String,
    coordinatorCelPhone: String,
    postalCode: String,
    department: String,
    observations: String,
    abandonment: {type: Boolean, default: false},	
    legalRepresentativeAbsence: {type: Boolean, default: false},
    abuseByOmission: {type: Boolean, default: false},	
    abuseBySupression: {type: Boolean, default: false},	
    abuseByTransgression: {type: Boolean, default: false},	
    lackOfBasicNeeds: {type: Boolean, default: false},	
    threatToHeritage: {type: Boolean, default: false},	
    addiction: {type: Boolean, default: false},	
    sexualFreedomVictims: {type: Boolean, default: false},	
    sexualHarassmentVictims: {type: Boolean, default: false},	
    procuring: {type: Boolean, default: false},	
    trafficking: {type: Boolean, default: false}, 	
    publicSexualExposure: {type: Boolean, default: false},	
    pornography: {type: Boolean, default: false},
    sexualTurism: {type: Boolean, default: false},	
    criminalRecruitmentRisk: {type: Boolean, default: false},	
    begging: {type: Boolean, default: false},	
    economicExploitation: {type: Boolean, default: false},	
    childAbduction: {type: Boolean, default: false},	
    childrenDinning: {type: Boolean, default: false},	
    preBasicEducationCenter: {type: Boolean, default: false},	
    sportEducationCenter: {type: Boolean, default: false},	
    alternativeEducationCenter: {type: Boolean, default: false},	
    initialEducationAndEarlyEstimulationCenter: {type: Boolean, default: false},	
    artisticFormationCenter: {type: Boolean, default: false},
    vocationalEducationCenter: {type: Boolean, default: false},
    others: {type: Boolean, default: false},
    tipologyObservations: String
});

module.exports = mongoose.model('Project', ProjectSchema);