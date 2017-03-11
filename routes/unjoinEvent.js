var events = require('../events.json');	

exports.view = function(req, res){
 	var eventId = req.params.eventId;		 	

	res.render('unjoinEvent', {
		"eventId": eventId
  });
};

exports.unjoining = function(req, res) {
 	var eventId = req.params.eventId;		 	
		
	for (var i = 0; i < events.length; i++){
		if (events[i].eventId == eventId){
			var unjoining = events[i];
		}
	}
	
	unjoining["joined"] = false;
	res.redirect("/confirmUnjoin")
}