var events = require('../events.json');	

function getResult() {
	var results = [];

	for (var i = 0; i < events.length; i++){
		if (events[i].created == false && 	events[i].joined == false){
			results.push(events[i]);
		}
	}
	
	return results;	
}

exports.view = function(req, res){
	var results = getResult();
	res.render('resultEvent', results);
};

exports.categoryView = function(req, res){
	var filter = [];
	var results = getResult();
	var category = req.params.category;		 	

	for (var i = 0; i < results.length; i++){
		if (results[i].category == category){
			filter.push(results[i]);
		}
	}

	res.render('resultEvent', filter);
};