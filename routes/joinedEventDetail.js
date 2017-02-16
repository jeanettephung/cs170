exports.view = function(req, res) {		
		var eventName = req.params.name;		 	
		var startTime = req.params.startTime;		
		var endTime = req.params.endTime;		
		var category = req.params.category;		
		var description = req.params.description;		
	  var creator = req.params.creator;

		res.render('joinedEventDetail', 
		{
			"name": eventName,
			"startTime": startTime,
			"endTime": endTime,
			"category": category,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people",	
			"creator": creator
		});
 };