var data = require('../data.json');

exports.view = function(req, res){
	var username = req.params.username;
	var name = req.params.name;
	var aboutMe = req.params.aboutMe;
	
	res.render('profile', {
		"username": username,
		"name": name,
		"aboutMe": aboutMe
	});
};