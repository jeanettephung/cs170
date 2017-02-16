'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
    $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choo
    });
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {	
	$.validator.addMethod('customphone', function (value, element) {
		return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
	}, "Please enter a valid phone number");

<<<<<<< HEAD
	$('#contact_form').validate({
=======
	$("#addCreatedEventForm").validate({
		rules: {
			create_name: "required",
			create_startTime: {
				required: true
			},
			create_endTime: {
				required: true,
			},
			create_category: {
				required: true
			},
			create_description: {
				required: true
			}
		},
		messages: {
			create_name: "Please enter a name for your event",
			create_startTime: {
				required: "Please enter what time your event starts",
			},
			create_endTime: {
				required: "Please enter what time your event ends"
			},
			create_category: {
				required: "Please state what category your event falls under.",
			},
			create_description: {
				required: "Please enter a short description about your event"
			}
		}
	});
	
	$("#contact_form").validate({
>>>>>>> b3aeb919e1591a0286dca8cda0e6e910fdaed8dd
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
