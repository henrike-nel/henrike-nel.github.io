(function ($) {

    "use strict";

    $("#contact").validate({
        errorPlacement: function () {
            return false;  // suppresses error message text
        }
    });

    $("#contact-form").submit(function (e) {
        e.preventDefault();
        var name = $("#form-name").val();
        var email = $("#form-email").val();
        var subject = $("#form-subject").val();
        var message = $("#form-message").val();
        var templateParams = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

        emailjs.sendForm('henrike_gmail', 'template_website_email', templateParams) //use your Service ID and Template ID
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

        $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: "POST",
            data: templateParams,
        }
        ).done(function () {
            alert('Your mail is sent!');
        }).fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
        });

    })});
