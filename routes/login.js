exports.view = function(req, res){
  res.render('login', {layout: 'title'})
};


exports.login = function(req, res) {
	res.redirect("/index");
}
