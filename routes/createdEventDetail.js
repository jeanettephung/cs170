var data = require('../events.json');

exports.viewCreatedEventDetail = function (req, res) {
	var eventId = req.params.eventId;

	res.render('createdEventDetail',
	{
		"eventId": eventId
	});
}
