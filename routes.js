var organizationsController = require('./controllers/organizationsController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var projectsController = require('./controllers/projectsController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, DINAF')}}},
//	{method: 'PUT', path: '/v1/organizations', config: organizationsController.updateOrganizations},
	{method: 'PUT', path: '/v1/organization/{organizationId}', config: organizationsController.editOrganization},
	{method: 'GET', path: '/v1/organization/{organizationId}', config: organizationsController.getOrganizationById},
	{method: 'GET', path: '/v1/organization/projects/{organizationId}', config: projectsController.getProjects},
	{method: 'GET', path: '/v1/organizations', config: organizationsController.getOrganizations},
    {method: 'POST', path: '/v1/organization', config: organizationsController.createOrganization},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout}
];
