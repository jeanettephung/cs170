var user = require("../user.json");

exports.view = function(req, res){
  res.render('signup', {
     
  });
};

exports.signingup = function(req, res) {
	var username = req.params.username;
	var email = req.params.email;
	var name = req.params.name;		 	
	var password = req.params.password;	

	console.log(username);
	user["username"] = username;
	user["email"] = email;
	user["name"] = name;
	user["expertise"] = "N/A";
	user["aboutMe"] = "Hi, I'm new!";
	user["password"] = password;
	user["eventsMentored"] = "";
	
	console.log(user);
	res.redirect("/findEvents");
}