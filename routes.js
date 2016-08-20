var organizationsController = require('./controllers/organizationsController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, DINAF')}}},
	{method: 'GET', path: '/v1/organizations', config: organizationsController.getOrganizations},
  {method: 'POST', path: '/v1/organization', config: organizationsController.createOrganization},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout}
];
