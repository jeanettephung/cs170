exports.view = function(req, res){
  res.render('signup', {
     
  });
};

exports.signingup = function(req, res) {
	res.redirect("/successCreate");
}