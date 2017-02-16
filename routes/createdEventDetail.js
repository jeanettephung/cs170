var data = require('../data.json');		 
  	
 exports.viewCreatedEventDetail = function(req, res) {		
		var eventName = req.params.name;		 	
		var startTime = req.params.startTime;		
		var endTime = req.params.endTime;		
		var category = req.params.category;		
		var description = req.params.description;		

		res.render('createdEventDetail', 
		{
			"name": eventName,
			"startTime": startTime,
			"endTime": endTime,
			"category": category,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people",			
		});
 };

//var Events = require('../models/event');
//
//exports.viewCreatedEventDetail = function(req, res) {
//	var eventId = req.params.eventId;
//	
//	Events
//		.find({"eventId": eventId})
//		.exec(renderEvents);
//	
//	function renderEvents(err, events) {
//		console.log(events);
//		res.render('createdEventDetail', { 'events': events });
//	}
//
//};