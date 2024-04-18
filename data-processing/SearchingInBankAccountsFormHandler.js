
class SearchingInBankAccountsFormHandler {

    processForm(submittedForm) {

        var nationalId = submittedForm["nationalId"].value;

        // load user's info using its nationalId
        // name, dateOfBirth, iban, balance, currency, nationalId, cellPhone, email, mailingAddress
        var userInfoReadModel = new UserInfoReadModel("inga robert", "2000-01-01", "GB29NWBK60165561440000", 5000.5, "GBP", "99996670589999", "07700900777", "inga.robert.2000@gmail.com", "55a High Street, Hedge End, SOUTHAMPTON, SO20 4NG");

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
                var updateBankAccountPage = new UpdateBankAccountPage();
                pageContent = updateBankAccountPage.getHtml(userInfoReadModel);
                break;
            case "removeBankAccount":
                document.title = "Remove bank account";
                var removeBankAccountPage = new RemoveBankAccountPage();
                pageContent = removeBankAccountPage.getHtml(userInfoReadModel);
                break;
            default:
                throw new Error("Unknown targetPage !!!");
        }

        var root = document.getElementById("root");
        var content = document.getElementById("content");
        var footer = document.getElementById("footer");
        content.innerHTML = pageContent;
        root.insertBefore(content, footer);
    }

}