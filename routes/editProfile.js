var data = require('../user.json');

exports.view = function(req, res){
  res.render('editProfile', data);
};

exports.updatingProfile = function(req, res) {
	var name = req.params.name;		 	
	var expertise = req.params.expertise;		
	var aboutMe = req.params.aboutMe;	
		
	data["name"] = name;
	data["expertise"] = expertise;
	data["aboutMe"] = aboutMe;
	
	res.redirect("/myProfile");
}