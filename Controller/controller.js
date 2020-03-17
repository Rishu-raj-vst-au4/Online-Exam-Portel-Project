const ProjectController = {};

ProjectController.add = function(req, res) {
    let Firstname = req.body.Firstname;
    let Lastname = req.body.Lastname;
    let Email = req.body.Email;
    let Gender = req.body.Gender;
    let Mobile = req.body.Mobilenumber;
    let Password = req.body.Password;
    let Confirmpassword = req.body.ConfirmPassword;
    data = {
        FirstName: Firstname,
        LastName: Lastname,
        email: Email,
        gender: Gender,
        mobile: Mobile,
        password: Password,
        confirmpassword: Confirmpassword

    }
    console.log(data);
}

module.exports = ProjectController;