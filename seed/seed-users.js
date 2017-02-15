var mongoose = require("mongoose");
var Users = require("../models/user.js");

mongoose.connect('localhost:27017/cs170');

var users = 
	[
		{
			"email": "jen@ucsd.edu",
			"password": "123",
			"imageURL": "http://i407.photobucket.com/albums/pp158/jsatabla/Kawaii_Sushi_by_The_8th_Sin-1.jpg",
			"username": "itsjen",
			"name": "Jen",
			"expertise": "food",
			"aboutMe": "I like to eat sushi",
			"eventsMentored": [
				{"eventName": "Sushi Ki"},
				{"eventName": "Gin Sushi"},
				{"eventName": "Sushi Stop"}
			]
		},
		{
			"email": "onetwo@one.com",
			"password": "123",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Vannevar_Bush_portrait.jpg",
			"name": "ONE",
			"username": "onetwo",
			"expertise": "ONE",
			"aboutMe": "I like to eat sushi",
			"eventsMentored": [
				{"eventName": "ONE"},
				{"eventName": "ONE"},
				{"eventName": "ONE"}
			]
		},
		{
			"email": "graceful@ucsd.edu",
			"password" : "123",
			"imageURL": "http://amhistory.si.edu/ogmt/images/upload/women-mathematicians/AHB2012q06025.jpg",
			"name": "Grace",
			"username": "graceful",
			"expertise": "hiking",
			"aboutMe": "I like hiking in the early mornings",
			"eventsMentored": [
				{"eventName": "Potato Chip Hike"}
			]
		},
		{
			"email": "allen@hotmail.com",
			"password": "123",
			"imageURL": "http://uploads.edubilla.com/awards-winners/92/b4/allen-newell.jpg",
			"name": "Allen",
			"username": "timallen",
			"expertise": "psychology",
			"aboutMe": "I play with people's minds",
			"eventsMentored": [
				{"eventName": "Freud study"},
				{"eventName": "psych ward"},
				{"eventName": "twilight zone"}
			]
		},
		{
			"email": "joe@ucsd.edu",
			"password": "123",
			"imageURL": "/images/profile-placeholder.png",
			"name": "Joe",
			"username": "GIjoe",
			"expertise": "math",
			"aboutMe": "I live off of math",
			"eventsMentored": [
				{"eventName": "Math test study group"}
			]
		},
		{
			"email": "new@com.com",
			"password": "123",
			"imageURL": "/images/profile-placeholder.png",
			"name": "Newll",
			"username": "sonew",
			"expertise": "wine",
			"aboutMe": "I like all wine with my food",
			"eventsMentored": [
				{"eventName": "Wine testing 1"},
				{"eventName": "Wine testing 2"},
				{"eventName": "Wine testing 3"}
			]
		},
		{
			"email": "cyn@ucsd.edu",
			"password": "123",
			"imageURL": "/images/profile-placeholder.png",
			"name": "Cynthia",
			"username": "justCyn",
			"expertise": "golf",
			"aboutMe": "Hole-in-one",
			"eventsMentored": [
				{"eventName": "miniture golfing"},
				{"eventName": "bowling"}
			]
		}
		
	]


var done = 0;

for(var i = 0; i < users.length; i++){
		var temp = new Users(users[i]);
    temp.save(function (result) {
        done++;
        if(done === users.length){
            exit();
            console.log(users.length);
        }
    })
};

function exit(){
    mongoose.disconnect();
}