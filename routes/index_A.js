var events = require('../events.json');	
  		  
exports.viewA = function(req, res){
		events["variant"] = false;
		console.log(events)
  	res.render('index_A', events);
};

exports.viewB = function(req, res){
		events["variant"] = true;
		res.render('index_A', events);
};