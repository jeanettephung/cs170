var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	"eventId": {type:String, required:true},
	"imageURL": {type:String},
	"name": {type:String, required:true},
	"startTime": {type:String, required:true},
	"endTime": {type:String, required:true},
	"category": {type:String},
	"description": {type:String, required:true},
	"mentoring": {type:String},
	"created": {type:String, required:true},
	"joined": {type:String, required:true},
	"creator": {type:Schema.Types.Object}
});

module.exports = mongoose.model('Event', schema);