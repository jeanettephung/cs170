var user = require('../user.json');

exports.userInfo = function(req, res) {
  	var current = user; 
  	res.json(current);
}