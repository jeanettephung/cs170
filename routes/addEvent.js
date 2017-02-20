var events = require("../events.json");
var data = require("../data.json");

exports.addEvent = function(req, res) {
	var name = req.param('name');
	var startTime = req.param('startTime');
	var endTime = req.param('endTime');
	var category = req.param('category');
  var description = req.param('description');
	var eventId = global.eventCounter;
	global.eventCounter++;
	
	var newEvent =
		{
			"eventId": eventId,
			"imageURL": "/images/profile-placeholder.png",
			"name": name,
			"startTime": startTime,
			"endTime": endTime,
			"category": category,
			"description": description,
			"created": true,
			"creator": "Jen"
		}

	events.push(newEvent);

	res.redirect("/successCreate");
}
