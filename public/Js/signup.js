$(document).ready(function() {
    $("#Agreeandjoin").on("click", function() {
        console.log("clicked");
        let firstname = $("#firstname").val();
        let lastname = $("#last-name").val();
        let gender = $("input[name='gender']:checked").val();
        let email = $("#inputEmail").val();
        let mobilenumber = $("#Mobile-number").val();
        let password = $("#password").val();
        let confirmpassword = $("#confirm-password").val();
        console.log(firstname);
        $.ajax({
            method: "POST",
            url: "/signup",
            dataType: "json",
            data: {
                Firstname: firstname,
                Lastname: lastname,
                Gender: gender,
                Email: email,
                Mobilenumber: mobilenumber,
                Password: password,
                ConfirmPassword: confirmpassword
            },
            success: function() {},
            error: function() {}
        });
    });
});