var events = require('../events.json');	

exports.view = function(req, res){
 	var eventName = req.params.name;		 	

	res.render('unjoinEvent', {
  });
};

exports.unjoining = function(req, res) {
	var eventName = req.params.name;		 	

	console.log("Unjoin");
		
	for (var i = 0; i < events.length; i++){
		if (events[i].name == eventName){
			var joining = events[i];
		}
	}
	
	joining["joined"] = false;
	console.log(events);
	res.redirect("/successUnjoin")
}