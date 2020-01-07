$(document).ready(function() {
    $('#Agreeandjoin').on('click', function() {
        let firstname = $('#firstname').val();
        let lastname = $('#last-name').val();
        let gender = $('#gender').val();
        let email = $('#inputEmail').val();
        let mobilenumber = $('#Mobile-number').val();
        let password = $('#password').val();
        let confirmpassword = $('#Confirm Password').val();
        console.log(firstname);
        $.ajax({
            method: "POST",
            url: '/cart/add',
            data: {
                Firstname: firstname,
                Lastname: lastname,
                Gender: gender,
                Email: email,
                Mobilenumber: mobilenumber,
                Password: password,
                ConfirmPassword: confirmpassword
            },
            success: function() {

            },
            error: function() {

            }
        });
    });
});