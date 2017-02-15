var Events = require('../models/event');

exports.viewCreatedEventDetail = function(req, res) {
	var eventId = req.params.eventId;
	
	Events
		.find({"eventId": eventId})
		.exec(renderEvents);
	
	function renderEvents(err, events) {
		console.log(events);
		res.render('createdEventDetail', { 'events': events });
	}

};