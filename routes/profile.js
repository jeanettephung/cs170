var events = require('../events.json');

exports.result = function(req, res){
	var eventId = req.params.eventId;
	
	res.render('profile', {
		"result": true,
		"join": false,
		"eventId": eventId
	});
};

exports.join = function(req, res){
	var eventId = req.params.eventId;
	
	res.render('profile', {
		"result": false,
		"join": true,
		"eventId": eventId
	});
};