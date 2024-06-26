
class SearchingInBankAccountsFormHandler {

    processForm(submittedForm) {

        var nationalId = submittedForm["nationalId"].value;

        // load user's info using its nationalId
        var userResourceClient = new UserResourceClient();
        var userInfoReadModel = userResourceClient.getDetailedBankAccount(nationalId);

        var pageContent;
        var targetPage = sessionStorage.getItem("targetPage");
        sessionStorage.removeItem("targetPage");
        switch (targetPage) {
            case "bankAccountDetails":
                document.title = "Bank account details";
                var bankAccountDetailsPage = new BankAccountDetailsPage();
                pageContent = bankAccountDetailsPage.getHtml(userInfoReadModel);
                break;
            case "updateBankAccount":
                document.title = "Update bank account";
                var updateBankAccountPage = new UpdatingBankAccountPage();
                pageContent = updateBankAccountPage.getHtml(userInfoReadModel);
                sessionStorage.setItem("nationalId", nationalId);
                break;
            case "removeBankAccount":
                document.title = "Remove bank account";
                var removeBankAccountPage = new RemovingBankAccountPage();
                pageContent = removeBankAccountPage.getHtml(userInfoReadModel);
                sessionStorage.setItem("nationalId", nationalId);
                sessionStorage.setItem("iban", userInfoReadModel.iban);
                break;
            default:
                throw new Error("Unknown targetPage !!!");
        }

        addContentToTemplate(pageContent);
    }

}