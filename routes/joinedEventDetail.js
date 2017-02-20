var events = require("../events.json");

exports.view = function(req, res) {		
	var eventId = req.params.eventId;
	
	res.render('joinedEventDetail', 
	{
		"eventId": eventId
	});
}

exports.joining = function(req, res) {
	var eventId = req.params.eventId;		 	
		
	for (var i = 0; i < events.length; i++){
		if (events[i].eventId == eventId){
			var joining = events[i];
		}
	}
	
	joining["joined"] = true;
	res.redirect("/successJoin")
}