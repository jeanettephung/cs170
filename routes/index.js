var event = require('../events.json');	
  		  
exports.view = function(req, res){
	event["index"] = true;
	res.render('index', event);
};

exports.join = function(req, res){
	event["index"] = false;
	res.render('index', event);
};


//var Events = require('../models/event');
//
//exports.view = function(req, res){
//
//	Events
//		.find({"created": true})
//		.exec(renderEvents);
//
//	function renderEvents(err, events) {
//		res.render('index', { 'events': events });
//	}
//
//};