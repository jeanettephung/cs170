var events = require('../events.json');	

exports.view = function(req, res){
  res.render('joinedEvents', events);
};
