var event = require('../events.json');	
  		  
exports.view = function(req, res){
	event["index"] = true;
	event["join"] = false;
	event["create"] = false;
	event["unjoin"] = false;
	event["cancel"] = false;
	res.render('index', event);
};

exports.join = function(req, res){
	event["index"] = false;
	event["join"] = false;
	event["create"] = false;
	event["unjoin"] = false;
	event["cancel"] = false;
	res.render('index', event);
};

exports.confirmJoin = function(req, res) {
	event["index"] = false;
	event["join"] = true;
	event["create"] = false;
	event["unjoin"] = false;
	event["cancel"] = false;
	res.render('index', event);
}

exports.confirmCreate = function(req, res) {	
	event["index"] = true;
	event["join"] = false;
	event["create"] = true;
	event["unjoin"] = false;
	event["cancel"] = false;
	res.render('index', event);
}

exports.confirmUnjoin = function(req, res) {
	event["index"] = false;
	event["join"] = false;
	event["create"] = false;
	event["unjoin"] = true;
	event["cancel"] = false;
	res.render('index', event);
}

exports.confirmCancel = function(req, res) {
	event["index"] = true;
	event["join"] = false;
	event["create"] = false;
	event["unjoin"] = false;
	event["cancel"] = true;
	res.render('index', event);
}

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