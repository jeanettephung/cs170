var events = require('../events.json');

exports.eventInfo = function(req, res) {
	var eventId = req.params.id;
	if (eventId == "random") {
		eventId = Math.floor(Math.random() * events.length) + 1;
	} else {
		eventId = parseInt(eventId);
	}

  	var event = events[eventId-1]; // of by one, our first project has index 0
  	res.json(event);
}