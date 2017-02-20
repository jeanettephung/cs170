var events = require('../events.json');	
var results = [];

for (var i = 0; i < events.length; i++){
	if (events[i].created == false && events[i].joined == false){
		results.push(events[i]);
	}
}

exports.view = function(req, res){
	console.log(results);
	res.render('resultEvent', results);
};