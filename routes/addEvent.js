var data = require("../data.json");

exports.addEvent = function(req, res) {
	var name = req.param('name');
  var description = req.param('description');
	
	var newEvent = 
		{
		 	"eventId": {type:String, required:true},
			"imageURL": "/images/profile-placeholder.png",
			"name": name,
			"startTime": {type:String, required:true},
			"endTime": {type:String, required:true},
			"category": {type:String},
			"description": {type:String, required:true},
			"mentoring": {type:String},
			"created": {type:String, required:true},
			"joined": {type:String, required:true},
			"creator": {type:Schema.Types.Object}
		}

	data.events.push(newFriend);
	console.log(newFriend);
}