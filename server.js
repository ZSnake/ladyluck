var hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');
var routes = require('./routes');
var auth = require('hapi-auth-cookie');
var config = require('./config')
var server = new hapi.Server();
var https = require('hapi-require-https');

server.connection({
    port: ~~process.env.PORT || 8000,
    routes: { cors: true}
});

mongoose.connect(process.env.database);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

server.register([inert, auth, https], function(err){

  server.auth.strategy('session', 'cookie', {
    password: 'secretpasswordforencryption',
    cookie: 'angular-scaffold-cookie',
    ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
    isSecure: false
  });

	server.route(routes.endpoints);

	server.start(function () {
        console.log("Database", process.env.database);
	    console.log('Server running at:', server.info.uri);
	});
});
