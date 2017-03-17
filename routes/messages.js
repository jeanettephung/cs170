exports.view = function(req, res){
  res.render('messages', {
    "confirm": false
  });
};

exports.confirmMessage= function(req, res){
  res.render('messages', {
    "confirm": true
  });
};
