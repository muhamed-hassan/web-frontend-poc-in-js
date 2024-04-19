
class UpdatingBankAccountFormHandler {

    processForm(submittedForm) {

        var nationalId = localStorage.getItem("nationalId");
        localStorage.removeItem("nationalId");
        var cellPhone = submittedForm["cellPhone"].value;
        var email = submittedForm["email"].value;
        var mailingAddress = submittedForm["mailingAddress"].value;
        var userInfoUpdateModel = new UserInfoUpdateModel(nationalId, cellPhone, email, mailingAddress);

        console.log(userInfoUpdateModel);
    }

}