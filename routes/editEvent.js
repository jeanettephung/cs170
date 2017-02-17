var data = require('../data.json');		 
var events = require('../events.json');		 

exports.view = function(req, res) {		
		var eventName = req.params.name;		 	
		var startTime = req.params.startTime;		
		var endTime = req.params.endTime;		
		var category = req.params.category;		
		var description = req.params.description;		

		res.render('editEvent', 
		{
			"name": eventName,
			"startTime": startTime,
			"endTime": endTime,
			"category": category,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people",			
		});
 };

exports.updatingEvent = function(req, res) {
	var eventName = req.params.name;		 	
	var startTime = req.params.startTime;		
	var endTime = req.params.endTime;		
	var category = req.params.category;		
	var description = req.params.description;
	
	console.log("Update");
		
	for (var i = 0; i < events.length; i++){
		if (events[i].name == eventName){
			var updating = events[i];
		}
	}
	
	updating["name"] = eventName;
	updating["startTime"] = startTime;
	updating["endTime"] = endTime;
	updating["category"] = category;
	updating["description"] = description;
	
	console.log(events);
	
	console.log(eventName);
	res.redirect("/createdEventDetail/"+eventName+"/"+startTime+"/"+endTime+"/"+category+"/"+description);
}