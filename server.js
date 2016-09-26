var hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');
var routes = require('./routes');
var auth = require('hapi-auth-cookie');
var config = require('./config')
var server = new hapi.Server();
var https = require('hapi-require-https');
var cloudinary = require('cloudinary');

server.connection({
    port: ~~process.env.PORT || 8000,
    routes: { cors: true }
});

mongoose.connect(process.env.database ? process.env.database : "mongodb://localhost:27017/ladyluck");

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
    cloudinary.config({ 
        cloud_name: 'dvxiia4du', 
        api_key: '856997925515926', 
        api_secret: 'nyCEfWMRi7Qw-iF9d95hw0aWrR0'         
    });
	server.route(routes.endpoints);

	server.start(function () {
        console.log("Database", process.env.database);
	    console.log('Server running at:', server.info.uri);
	});
});
