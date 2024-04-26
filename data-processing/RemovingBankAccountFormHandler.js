
class RemovingBankAccountFormHandler {

    processForm() {

        var nationalId = localStorage.getItem("nationalId");        
        localStorage.removeItem("nationalId");
        localStorage.removeItem("iban");
        
        var userResourceClient = new UserResourceClient();
        userResourceClient.removeBankAccount(nationalId);

        document.title = "Home";
        var mainPage = new MainPage();
        var pageContent = mainPage.getHtml();
        addContentToTemplate(pageContent);
    }

}