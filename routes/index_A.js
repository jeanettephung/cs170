var data = require('../events.json');	
  		  
exports.viewA = function(req, res){
		data["variant"] = false;
  	res.render('index_A', {event: data, layout: false});
};

exports.viewB = function(req, res){
		data["variant"] = true;
		res.render('index_A', {event: data, layout: false});
};