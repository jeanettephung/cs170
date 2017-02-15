var data = require("../data.json");

exports.addEvent = function(req, res) {
	var name = req.param('name');
	var startTime = req.param('startTime');
	var endTime = req.param('endTime');
  var description = req.param('description');
	var category = req.param('category');
	
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

	data.events.push(newEvent);
	console.log(newEvent);
}E