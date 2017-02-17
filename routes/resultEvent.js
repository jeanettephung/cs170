var events = require('../events.json');	
var notCreated = [];
var notCJ = [];

for (var i = 0; i < events.length; i++){
	if (events[i].created == false){
		notCreated.push(events[i]);
	}
}

for (var i = 0; i < notCreated.length; i++){
	if (notCreated[i].joined == false){
		notCJ.push(notCreated[i]);
	}
}

exports.view = function(req, res){
	res.render('resultEvent', notCJ);
};