var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	"email": {type:String, required: true, select:false},
	"password": {type:String, required: true, select:false},
	"imageURL": {type:String, required:true},
	"username": {type:String, required:true},
	"name": {type:String, required:true},
	"expertise": {type:String, required:false},
	"aboutMe": {type:String, required:false},
	"eventsMentored": {type:Schema.Types.Object, required:true}
});

module.exports = mongoose.model('User', schema);