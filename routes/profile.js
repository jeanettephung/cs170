var events = require('../events.json');

exports.view = function(req, res){
	var eventId = req.params.eventId;
	
	res.render('profile', {
		"eventId": eventId
	});
};