var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	"eventId": {type:String, required:true},
	"imageURL": {type:String, required:true},
	"name": {type:String, required:true},
	"startTime": {type:String, required:true},
	"endTime": {type:String, required:true},
	"category": {type:String, required:true},
	"description": {type:String, required:true},
	"mentoring": {type:String, required:true},
	"created": {type:String, required:true},
	"joined": {type:String, required:true},
	"creator": {type:Schema.Types.Object, required:true}
});

module.exports = mongoose.model('Event', schema);