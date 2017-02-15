var data = require('../data.json');

exports.viewCreatedEventDetail = function(req, res) {
	var eventName = req.params.name;
	var startTime = req.params.startTime;
	var endTime = req.params.endTime;
	var category = req.params.category;
	var description = req.params.description;
	
	res.render('createdEventDetail', {
		"eventName": eventName,
		"startTime": startTime,
		"endTime": endTime,
		"category": category,
		"description": description
	});
};