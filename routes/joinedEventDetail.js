var data = require('../data.json');

exports.view = function(req, res){
    console.log("hellor");
    res.render('joinedEventDetail', data);
};
