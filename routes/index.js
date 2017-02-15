var data = require('../data.json');	

var Events = require('../models/event');
  		  
exports.view = function(req, res){
	res.render('index', data);
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