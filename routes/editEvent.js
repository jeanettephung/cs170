var data = require('../data.json');		 
var events = require('../events.json');		 

exports.view = function(req, res) {		
	var eventId = req.params.eventId;
	
	res.render('editEvent', 
	{
		"eventId": eventId
	});
}

exports.updatingEvent = function(req, res) {
	var eventId = req.params.eventId;
	var eventName = req.params.name;		 	
	var startTime = req.params.startTime;		
	var endTime = req.params.endTime;		
	var category = req.params.category;		
	var description = req.params.description;
	var date = req.params.date;
	var location = req.params.location;
	
	for (var i = 0; i < events.length; i++){
		if (events[i].eventId == eventId){
			var updating = events[i];
		}
	}
	
	updating["name"] = eventName;
	updating["startTime"] = startTime;
	updating["endTime"] = endTime;
	updating["category"] = category;
	updating["description"] = description;
	updating["date"] = date;
	updating["location"] = req.params.location;
		
	res.redirect("/createdEventDetail/"+eventId);
}