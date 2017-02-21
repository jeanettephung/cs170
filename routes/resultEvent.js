var events = require('../events.json');	
var results = [];

for (var i = 0; i < events.length; i++){
	if (events[i].created == false && events[i].joined == false){
		results.push(events[i]);
	}
}

exports.view = function(req, res){
	res.render('resultEvent', results);
};

exports.categoryView = function(req, res){
	var filter = [];
	var category = req.params.category;		 	
	
	for (var i = 0; i < results.length; i++){
		if (results[i].category == category){
			filter.push(results[i]);
		}
	}
	res.render('resultEvent', filter);
};