var user = require("../user.json");

exports.view = function(req, res){
  res.render('signup', {
     
  });
};

exports.signingup = function(req, res) {
	var username = req.params.username;
	var email = req.params.email;
	var name = req.params.name;		 	
	var aboutMe = req.params.aboutMe;		
	var password = req.params.signUpPass;
	var eventsMentored = req.params.eventsMentored;	

	user["username"] = username;
	user["email"] = email;
	user["name"] = name;
	user["expertise"] = "N/A";
	user["aboutMe"] = "Hi, I'm new!";
	user["password"] = password;
	user["eventsMentored"] = {"eventName": "none"};
	
	console.log(user);
	res.redirect("/findEvents");
}