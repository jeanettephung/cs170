exports.view = function(req, res){
  res.render('forgotPassword', {layout: 'title', send: false});
};

exports.sendPW = function(req, res){
  res.render('forgotPassword', {layout: 'title', send: true});
};