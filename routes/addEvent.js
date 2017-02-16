var events = require("../events.json");

exports.addEvent = function(req, res) {
	var name = req.param('name');
	var startTime = req.param('startTime');
	var endTime = req.param('endTime');
	var category = req.param('category');
  var description = req.param('description');

	var newEvent =
		{
			"imageURL": "/images/profile-placeholder.png",
			"name": name,
			"startTime": startTime,
			"endTime": endTime,
			"category": category,
			"description": description,
			"created": true
		}

	events.push(newEvent);
	console.log(newEvent);

	res.redirect("/index");
}
