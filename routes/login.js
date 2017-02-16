exports.view = function(req, res){
  res.render('login');
};


exports.login = function(req, res) {
	res.redirect("/index");
}
