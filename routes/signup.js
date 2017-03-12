var user = require("../user.json");

exports.view = function(req, res){
  res.render('signup', {layout: 'title'});
};

exports.signingup = function(req, res) {
	var username = req.params.username;
	var email = req.params.email;
	var name = req.params.name;		 	
	var password = req.params.password;	

	user["username"] = username;
	user["email"] = email;
	user["name"] = name;
	user["expertise"] = "N/A";
	user["aboutMe"] = "Hi, I'm new!";
	user["password"] = password;
	user["eventsMentored"] = "";
	
	res.redirect("/findEvents");
}