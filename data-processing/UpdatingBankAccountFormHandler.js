
class UpdatingBankAccountFormHandler {

    processForm(submittedForm) {

        var nationalId = localStorage.getItem("nationalId");
        localStorage.removeItem("nationalId");
        var cellPhone = submittedForm["cellPhone"].value;
        var email = submittedForm["email"].value;
        var mailingAddress = submittedForm["mailingAddress"].value;
        var userInfoUpdateModel = new UserInfoUpdateModel(nationalId, cellPhone, email, mailingAddress);

        console.log(userInfoUpdateModel);

        /*
        TODO:
        1. After action => calling the backend to update a bank account
        */

        // 2. Dim all fields and buttons
        dimForm(submittedForm);

        // 3. Show a state-dialogue mentioning the result of done action “The bank account has been updated successfully”
        showBankAccountStateDialogue("The bank account has been updated successfully");
    }

}