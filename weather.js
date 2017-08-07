var request = require('request');

module.exports = function (location) {
   
   var url = 'http://api.openweathermap.org/data/2.5/weather?appid=1f6ed1f77d406b97d886481bac6e2fd2&q=%20+%20'+location+'%20+%20&units=imperial';
   
   return new Promise( function(resolve, reject) {
   if (!location) {
	reject('No location provided');
   } else {

	request({
		url: url,
		json: true
	}, function(error,response,body) {
		if(error) {
			reject('Unable to fetch weather');
		} else {
			resolve('It\'s '+ body.main.temp+ ' in '+ body.name+' !');
		}
	});
          }
      } );
}