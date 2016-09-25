var organizationsController = require('./controllers/organizationsController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var projectsController = require('./controllers/projectsController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, DINAF')}}},
//	{method: 'PUT', path: '/v1/organizations', config: organizationsController.updateOrganizations},
	{method: 'PUT', path: '/v1/organization/{organizationId}', config: organizationsController.editOrganization},
	{method: 'DELETE', path: '/v1/organization/{organizationId}', config: organizationsController.deleteOrganization},
	{method: 'GET', path: '/v1/organization/{organizationId}', config: organizationsController.getOrganizationById},
	{method: 'GET', path: '/v1/organization/{organizationId}/projects/', config: projectsController.getProjects},
	{method: 'PUT', path: '/v1/organization/{organizationId}/project/{projectId}', config: projectsController.editProject},
	{method: 'GET', path: '/v1/organization/{organizationId}/project/{projectId}', config: projectsController.getProjectsById},//get para editar un projecto
	{method: 'GET', path: '/v1/organizations', config: organizationsController.getOrganizations},
    {method: 'POST', path: '/v1/organization', config: organizationsController.createOrganization},
	{method: 'POST', path: '/v1/createUser', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'GET', path: '/v1/users', config: usersController.getUsers},
	{method: 'DELETE', path: '/v1/user/{userId}', config: usersController.deleteUser},
	{method: 'PUT', path: '/v1/user/{userId}', config: usersController.editUser}
];
