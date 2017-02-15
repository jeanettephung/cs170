//var mongoose = require("mongoose");
//var Events = require("../models/event.js");
//
//mongoose.connect('localhost:27017/cs170');
//
//var events = 
//	[
//		{
//			"eventId": "eventid1",
//			"imageURL": "https://s-media-cache-ak0.pinimg.com/originals/32/a9/4e/32a94ef9ae5174de907be17f9f52915b.jpg",
//			"name": "c. Petting farm",
//			"startTime": "1am",
//			"endTime": "1pm",
//			"category": "zoology",
//			"description": "Has awesome pet mice",
//			"mentoring": "yes",
//			"created": true,
//			"joined": false,
//			"creator":
//				{
//					"imageURL": "http://i407.photobucket.com/albums/pp158/jsatabla/Kawaii_Sushi_by_The_8th_Sin-1.jpg",
//					"name": "Jen",
//					"username": "itsjen",
//					"expertise": "food",
//					"aboutMe": "I like to eat sushi",
//					"eventsMentored": [
//						{"eventName": "Sushi Ki"},
//						{"eventName": "Gin Sushi"},
//						{"eventName": "Sushi Stop"}
//					]
//				}
//		},
//		{
//			"eventId": "eventid2",
//			"imageURL": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Geisel_Library3.jpg",
//			"name": "c. Drawing at Geisel",
//			"startTime": "2am",
//			"endTime": "2pm",
//			"category": "art",
//			"description": "Great at sketching",
//			"mentoring": "yes",
//			"created": true,
//			"joined": false,
//			"creator":
//				{
//					"imageURL": "http://i407.photobucket.com/albums/pp158/jsatabla/Kawaii_Sushi_by_The_8th_Sin-1.jpg",
//					"name": "Jen",
//					"username": "itsjen",
//					"expertise": "food",
//					"aboutMe": "I like to eat sushi",
//					"eventsMentored": [
//						{"eventName": "Sushi Ki"},
//						{"eventName": "Gin Sushi"},
//						{"eventName": "Sushi Stop"}
//					]
//				}
//		},
//		{
//			"eventId": "eventid3",
//			"imageURL": "http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/istock_000006091233_small.jpg",
//			"name": "c. Shores Beach",
//			"startTime": "3am",
//			"endTime": "3pm",
//			"category": "marine",
//			"description": "Loves boating",
//			"mentoring": "no",
//			"created": true,
//			"joined": false,
//			"creator":
//				{
//					"imageURL": "http://i407.photobucket.com/albums/pp158/jsatabla/Kawaii_Sushi_by_The_8th_Sin-1.jpg",
//					"name": "Jen",
//					"username": "itsjen",
//					"expertise": "food",
//					"aboutMe": "I like to eat sushi",
//					"eventsMentored": [
//						{"eventName": "Sushi Ki"},
//						{"eventName": "Gin Sushi"},
//						{"eventName": "Sushi Stop"}
//					]
//				}
//		},
//		{
//			"eventId": "eventid4",
//			"imageURL": "http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Science/A-G/brain.jpg",
//			"name": "j. Memory",
//			"startTime": "4am",
//			"endTime": "4pm",
//			"category": "neurology",
//			"description": "Has stellar associative memory",
//			"mentoring": "no",
//			"created": false,
//			"joined": true,
//			"creator":
//				{
//					"imageURL": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Vannevar_Bush_portrait.jpg",
//					"name": "ONE",
//					"username": "onetwo",
//					"expertise": "ONE",
//					"aboutMe": "I like to eat sushi",
//					"eventsMentored": [
//						{"eventName": "ONE"},
//						{"eventName": "ONE"},
//						{"eventName": "ONE"}
//					]
//				}
//		},
//		{
//			"eventId": "eventid5",
//			"imageURL": "http://www.outdoorproject.com/sites/default/files/styles/odp_comment_scale/public/comments/7338/1464170377/to_hike_or_not_to_hike.jpg?itok=Ti9tB_mP",
//			"name": "j. Hike at Grand Canyon",
//			"startTime": "5am",
//			"endTime": "5pm",
//			"category": "hike",
//			"description": "Let's see who stands last",
//			"mentoring": "no",
//			"created": false,
//			"joined": true,
//			"creator":
//				{
//					"imageURL": "http://amhistory.si.edu/ogmt/images/upload/women-mathematicians/AHB2012q06025.jpg",
//					"name": "Grace",
//					"username": "graceful",
//					"expertise": "hiking",
//					"aboutMe": "I like hiking in the early mornings",
//					"eventsMentored": [
//						{"eventName": "Potato Chip Hike"}
//					]
//				}
//		},
//		{
//			"eventId": "eventid6",
//			"imageURL": "http://s.hswstatic.com/gif/how-to-hike-1.jpg",
//			"startTime": "6am",
//			"endTime": "6pm",
//			"category" : "hike and psychology",
//			"description": "Really into psychology",
//			"mentoring": "no",
//			"created": false,
//			"joined": true,
//			"creator":
//				{
//					"imageURL": "http://uploads.edubilla.com/awards-winners/92/b4/allen-newell.jpg",
//					"name": "Allen",
//					"username": "timallen",
//					"expertise": "psychology",
//					"aboutMe": "I play with people's minds",
//					"eventsMentored": [
//						{"eventName": "Freud study"},
//						{"eventName": "psych ward"},
//						{"eventName": "twilight zone"}
//					]
//				}
//		},
//		{
//			"eventId": "eventid7",
//			"imageURL": "http://www.all-about-psychology.com/psychology-fb.jpg",
//			"name": "Allen Newell",
//			"startTime": "7am",
//			"endTime": "7pm",
//			"category" : "psychology",
//			"description": "Really into psychology",
//			"mentoring": "no",
//			"created": false,
//			"joined": false,
//			"creator":
//				{
//					"imageURL": "/images/profile-placeholder.png",
//					"name": "Joe",
//					"username": "GIjoe",
//					"expertise": "math",
//					"aboutMe": "I live off of math",
//					"eventsMentored": [
//						{"eventName": "Math test study group"}
//					]
//				}
//		},
//		{
//			"eventId": "eventid8",
//			"imageURL": "http://discovermagazine.com/~/media/Images/Issues/2016/September/wine.jpg",
//			"name": "Wine tasting",
//			"startTime": "8am",
//			"endTime": "8pm",
//			"category" : "wine",
//			"description": "Let's not get drunk",
//			"mentoring": "no",
//			"created": false,
//			"joined": false,
//			"creator":
//				{
//					"imageURL": "/images/profile-placeholder.png",
//					"name": "Newll",
//					"username": "sonew",
//					"expertise": "wine",
//					"aboutMe": "I like all wine with my food",
//					"eventsMentored": [
//						{"eventName": "Wine testing 1"},
//						{"eventName": "Wine testing 2"},
//						{"eventName": "Wine testing 3"}
//					]
//				}
//		},
//		{
//			"eventId": "eventid9",
//			"imageURL": "http://smock.foreuphosting5.com/wp-content/uploads/2015/04/tight.jpg",
//			"name": "Golfing",
//			"startTime": "9am",
//			"endTime": "9pm",
//			"category" : "golfing",
//			"description": "Birdie",
//			"mentoring": "no",
//			"created": false,
//			"joined": true,
//			"creator":
//				{
//					"imageURL": "/images/profile-placeholder.png",
//					"name": "Cynthia",
//					"username": "justCyn",
//					"expertise": "golf",
//					"aboutMe": "Hole-in-one",
//					"eventsMentored": [
//						{"eventName": "miniture golfing"},
//						{"eventName": "bowling"}
//					]
//				}
//		}
//	]
//
//
//var done = 0;
//
//for(var i = 0; i < events.length; i++){
//		var temp = new Events(events[i]);
//    temp.save(function (result) {
//        done++;
//        if(done === events.length){
//            exit();
//            console.log(events.length);
//        }
//    })
//};
//
//function exit(){
//    mongoose.disconnect();
//}