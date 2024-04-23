
class RemovingBankAccountFormHandler {

    processForm() {

        var nationalId = localStorage.getItem("nationalId");        
        localStorage.removeItem("nationalId");
        localStorage.removeItem("iban");
        
        /*
        TODO:
        After action => calling the backend to remove a bank account
        */
        console.log(nationalId);

        document.title = "Home";
        var mainPage = new MainPage();
        var pageContent = mainPage.getHtml();
        addContentToTemplate(pageContent);
    }

}