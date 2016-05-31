$(document).ready(function () {

    $('#contact_form').validate({ // initialize the plugin
        rules: {
            full_name: {
                required: true,
                minlength: 2,
            },
            email: {
                required: true,
                email: true,
                minlength: 5,
            },
            comment: {
                required: true,
            }
        }
    });
});
