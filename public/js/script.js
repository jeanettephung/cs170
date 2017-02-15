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

	$("#contact_form").validate({
		rules: {
			contact_name: "required",
			contact_phone: {
				required: true
			},
			contact_email: {
				required: true,
				email: true
			},
			contact_message: {
				required: true
			}
		},
		messages: {
			contact_name: "Please enter your name",
			contact_phone: {
				required: "Please enter your phone number(XXX-XXX-XXXX)",
			},
			contact_email: {
				required: "Please enter your email address",
				email: "Please enter a valid email address"
			},
			contact_message: {
				required: "Your message is empty",
			}
		}
	});

	$("#contactUs_submit").click(function () {
		$("#contact_form").submit();
		return false;
	})
}