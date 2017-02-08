
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var myProfile = require('./routes/myProfile');
var myProfile = require('./routes/editProfile');
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
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/index', function (req, res) {
    res.render('index');
});
app.get('/myProfile', function (req, res) {
    res.render('myProfile');
});
app.get('/editProfile', function (req, res) {
    res.render('editProfile');
});
app.get('/messages', function (req, res) {
    res.render('messages');
});
app.get('/contactUs', function (req, res) {
    res.render('contactUs');
});
app.get('/login', function (req, res) {
    res.render('login');
});
app.get('/logout', function (req, res) {
    res.render('logout');
});
app.get('/createEvents', function (req, res) {
    res.render('createEvents');
});
app.get('/createdEventDetail', function (req, res) {
    res.render('createdEventDetail');
});
app.get('/editEvent', function (req, res) {
    res.render('editEvent');
});
app.get('/cancelEvent', function (req, res) {
    res.render('cancelEvent');
});
app.get('/joinedEvents', function (req, res) {
    res.render('joinedEvents');
});
app.get('/joinedEventDetail', function (req, res) {
    res.render('joinedEventDetail');
});
app.get('/unjoinEvent', function (req, res) {
    res.render('unjoinEvent');
});
app.get('/findEvents', function (req, res) {
    res.render('findEvents');
});
app.get('/signup', function (req, res) {
    res.render('signup');
});
app.get('/forgotPassword', function (req, res) {
    res.render('forgotPassword');
});
app.get('/resultEventDetail', function (req, res) {
    res.render('resultEventDetail');
});
app.get('/profile', function (req, res) {
    res.render('profile');
});


// Example route
// app.get('/users', user.list);
//app.get('/project/:name', project.viewProject);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
