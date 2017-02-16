'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$.validator.addMethod('customphone', function (value, element) {
		return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
	}, "Please enter a valid phone number");

	$('#contact_form').validate({
		rules: {
			contact_email: {
				email: true
			}
		},
		messages: {
			contact_email: {
				email: "Please enter a valid email address"
			}
		}
	});

	$("#contactUs_submit").click(function () {
		$('#contact_form').submit();
	})
}