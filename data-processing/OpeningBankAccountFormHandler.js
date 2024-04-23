
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

        /*
        TODO:
        1. After action => calling the backend to create a new bank account
        */

        // 2. Dim all fields and buttons
        dimForm(submittedForm);

        // 3. Show a state-dialogue mentioning the result of done action “The bank account has been created successfully”
        showBankAccountStateDialogue("The bank account has been created successfully");
    }

}