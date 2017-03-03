'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
    $(".button-collapse").sideNav({
        menuWidth: 150, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choo
    });
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    var submit = false;
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

	$.validator.addMethod('customphone', function (value, element) {
		return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
	}, "Please enter a valid phone number in the format: xxx-xxx-xxxx");

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


    $("#formValidation").validate({
        rules: {
            signUp_email: {
                email: true
            },
            signUpPass: {
                required: true,
                minlength: 8
            },
            confirmPass: {
                required: true,
                minlength: 8,
                equalTo: "#signUpPass"
            }
        },
        messages: {
            signUp_email: {
                email: "Please enter a valid email address"
            }
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        }
    });


	$("#openM").click(function (){
		$(".modal").modal();
	})

    $("#contactUs").submit(function (e) {
        e.preventDefault();
		$('#modal_submit').appendTo("body").modal('show');
	});

	// $("#contact_form").validate({
	// 	rules: {
	// 		contact_email: {
	// 			email: true
	// 		}
	// 	},
	// 	messages: {
	// 		contact_email: {
	// 			email: "Please enter a valid email address"
	// 		}
	// 	}
	// }
    //
    //
    // );
}
