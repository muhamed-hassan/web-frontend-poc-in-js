
class OpeningBankAccountFormHandler {

    processForm(submittedForm) {

        var name = submittedForm["name"].value;
        var dob = submittedForm["dob"].value;
        var nationalId = submittedForm["nationalId"].value;
        var cellPhone = submittedForm["cellPhone"].value;
        var email = submittedForm["email"].value;
        var mailingAddress = submittedForm["mailingAddress"].value;
        var userInfoCreateModel = new UserInfoCreateModel(name, dob, nationalId, cellPhone, email, mailingAddress);

        console.log(userInfoCreateModel);
    }

}