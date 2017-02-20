var events = require('../events.json');		 

exports.view = function(req, res){
    var eventId = req.params.eventId;	
		res.render('cancelEvent', 
		{
			"eventId": eventId,
  });
};

exports.cancelling = function(req, res) {
	var eventId = req.params.eventId;
		
	console.log(eventId);
	
	for (var i = 0; i < events.length; i++){
		if (events[i].eventId == eventId){
			var deleting = i;
		}
	}

	var removed = events.splice(deleting, 1);
	
	console.log(removed);
	res.redirect("/index");
}