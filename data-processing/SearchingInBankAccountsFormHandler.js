
class SearchingInBankAccountsFormHandler {

    processForm(submittedForm) {

        var nationalId = submittedForm["nationalId"].value;

        // load user's info using its nationalId
        // name, dateOfBirth, iban, balance, currency, nationalId, cellPhone, email, mailingAddress
        var userInfoReadModel = new DetailedUserInfoReadModel("inga robert", "2000-01-01", "GB29NWBK60165561440000", 5000.5, "GBP", "99996670589999", "07700900777", "inga.robert.2000@gmail.com", "55a High Street, Hedge End, SOUTHAMPTON, SO20 4NG");

        var pageContent;
        var targetPage = localStorage.getItem("targetPage");
        localStorage.removeItem("targetPage");
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
                localStorage.setItem("nationalId", nationalId);
                break;
            case "removeBankAccount":
                document.title = "Remove bank account";
                var removeBankAccountPage = new RemovingBankAccountPage();
                pageContent = removeBankAccountPage.getHtml(userInfoReadModel);
                localStorage.setItem("nationalId", nationalId);
                localStorage.setItem("iban", userInfoReadModel.iban);
                break;
            default:
                throw new Error("Unknown targetPage !!!");
        }

        addContentToTemplate(pageContent);
    }

}