
class OpeningBankAccountFormHandler {

    processForm(submittedForm) {

        var name = submittedForm["name"].value;
        var dob = submittedForm["dob"].value;
        var nationalId = submittedForm["nationalId"].value;
        var cellPhone = submittedForm["cellPhone"].value;
        var email = submittedForm["email"].value;
        var mailingAddress = submittedForm["mailingAddress"].value;
        var userInfoCreateModel = new UserInfoCreateModel(name, dob, nationalId, cellPhone, email, mailingAddress);

        // 1. Dim all fields and buttons
        dimForm(submittedForm);

        // 2. After action => calling the backend to create a new bank account
        var userResourceClient = new UserResourceClient();
        userResourceClient.createBankAccount(userInfoCreateModel);

        // 3. Show a state-dialogue mentioning the result of done action “The bank account has been created successfully”
        showBankAccountStateDialogue("The bank account has been created successfully");
    }

}