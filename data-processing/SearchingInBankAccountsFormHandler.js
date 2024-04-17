
class SearchingInBankAccountsFormHandler {

    processForm(submittedForm) {

        var nationalId = submittedForm["nationalId"].value;

        // load user's info using its nationalId
        var userInfo = null;

        var pageContent;
        var targetPage = localStorage.getItem("targetPage");
        localStorage.removeItem("targetPage");
        switch (targetPage) {
            case "bankAccountDetails":
                var bankAccountDetailsPage = new BankAccountDetailsPage();
                pageContent = bankAccountDetailsPage.getHtml(userInfo);
                break;
            case "updateBankAccount":
                var updateBankAccountPage = new UpdateBankAccountPage();
                pageContent = updateBankAccountPage.getHtml(userInfo);
                break;
            case "removeBankAccount":
                var removeBankAccountPage = new RemoveBankAccountPage();
                pageContent = removeBankAccountPage.getHtml(userInfo);
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