var data = require('../data.json');

exports.view = function(req, res){
    console.log("HELLOS");
    console.log(data);
    res.render('editEvent', data);

};
