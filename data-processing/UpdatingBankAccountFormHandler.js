
class UpdatingBankAccountFormHandler {

    processForm(submittedForm) {

        var nationalId = sessionStorage.getItem("nationalId");
        sessionStorage.removeItem("nationalId");
        var cellPhone = submittedForm["cellPhone"].value;
        var email = submittedForm["email"].value;
        var mailingAddress = submittedForm["mailingAddress"].value;
        var userInfoUpdateModel = new UserInfoUpdateModel(nationalId, cellPhone, email, mailingAddress);

        // 1. Dim all fields and buttons
        dimForm(submittedForm);

        // 2. After action => calling the backend to update a bank account
        var userResourceClient = new UserResourceClient();
        userResourceClient.updateBankAccount(userInfoUpdateModel);

        // 3. Show a state-dialogue mentioning the result of done action “The bank account has been updated successfully”
        showBankAccountStateDialogue("The bank account has been updated successfully");
    }

}