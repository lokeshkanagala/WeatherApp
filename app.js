var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs').option('location', {
	alias: 'l',
	demand: false,
	describe: 'Location to fetch weather for',
	type: 'string'
}).help('help').argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('Location was provided');
	weather(argv.l).then(function (x) {
		console.log(x);
	  }).catch(function(x) {
			console.log('Unable to guess location');
		});
	} else {
		location().then( function(x) {
			return weather(x.city);
		}).then(function (x) {
			console.log(x);
		}).catch(function (error){
             console.log(error);
		});
	}