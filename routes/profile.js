var data = require('../data.json');

exports.view = function(req, res){
  res.render('profile', data);
};

//exports.viewProject = function(req, res) {
//	var name = req.params.name;
//	console.log("The project name is: " + name);
//	res.render('project', {
//			'projectName' : name
//	});
//};