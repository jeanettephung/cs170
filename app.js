
/**
 * Module dependencies.
 */
var data = require("./data.json");

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
//var mongoose = require("mongoose");

//mongoose.connect('localhost:27017/cs170',function(){
//  console.log('mongoose connected on server');
//});
var index = require('./routes/index');
var myProfile = require('./routes/myProfile');
var editProfile = require('./routes/editProfile');
var messages = require('./routes/messages');
var contactUs = require('./routes/contactUs');
var login = require('./routes/login');
var logout = require('./routes/logout');
var createEvents = require('./routes/createEvents');
var createdEventDetail = require('./routes/createdEventDetail');
var editEvent = require('./routes/editEvent');
var cancelEvent = require('./routes/cancelEvent');
var joinedEvents = require('./routes/joinedEvents');
var joinedEventDetail = require('./routes/joinedEventDetail');
var unjoinEvent = require('./routes/unjoinEvent');
var signup = require('./routes/signup');
var forgetPassword = require('./routes/forgotPassword');
var resultEventDetail = require('./routes/resultEventDetail');
var findEvents = require('./routes/findEvents');
var profile = require('./routes/profile');
var event = require('./routes/event');
var resultEvent = require('./routes/resultEvent');
var successCreate = require('./routes/successCreate');
var successJoin = require('./routes/successJoin');
var successUnjoin = require('./routes/successUnjoin');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/index', index.view);
app.get('/profile', profile.view);
app.get('/myProfile', myProfile.view);
app.get('/editProfile', editProfile.view);
app.get('/messages', function (req, res) {
    res.render('messages');
});
app.get('/contactUs', function (req, res) {
    res.render('contactUs');
});
app.get('/login',login.view);
app.get('/logout', function (req, res) {
    res.render('logout');
});
app.get('/createEvents', function (req, res) {
    res.render('createEvents');
});
//-- save app.get('/createdEventDetail/:eventId', createdEventDetail.viewCreatedEventDetail);
app.get('/createdEventDetail/:name/:startTime/:endTime/:category/:description', createdEventDetail.viewCreatedEventDetail);
app.get('/editEvent/:name/:startTime/:endTime/:category/:description', editEvent.view);
app.get('/cancelEvent', function (req, res) {
    res.render('cancelEvent');
});
app.get('/joinedEvents', joinedEvents.view);
app.get('/joinedEventDetail/:name/:startTime/:endTime/:category/:description/:creator', joinedEventDetail.view);
app.get('/unjoinEvent', function (req, res) {
    res.render('unjoinEvent');
});
app.get('/findEvents', function (req, res) {
    res.render('findEvents');
});
app.get('/signup', signup.view);

app.get('/forgotPassword', function (req, res) {
    res.render('forgotPassword');
});
app.get('/resultEventDetail/:name/:startTime/:endTime/:category/:description/:creator', resultEventDetail.view);
app.get('/resultEvent', resultEvent.view);
app.get('/successCreate', successCreate.view);
app.get('/successJoin', successJoin.view);
app.get('/successUnjoin', successUnjoin.view);

// routes (dealing with data)
var add = require('./routes/addEvent');
app.get('/addEvent', add.addEvent)
app.get('/event/:id', event.eventInfo);
app.get('/loggingIn', login.login);
app.get('/joiningEvent/:name', joinedEventDetail.joining);
app.get('/unjoiningevent/:name', unjoinEvent.unjoining);
app.get('/signingup', signup.signingup);

// Example route
// app.get('/users', user.list);
//app.get('/project/:name', project.viewProject);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
