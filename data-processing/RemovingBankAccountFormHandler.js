
class RemovingBankAccountFormHandler {

    processForm() {

        var nationalId = localStorage.getItem("nationalId");        
        localStorage.removeItem("nationalId");
        localStorage.removeItem("iban");
        
        var userResourceClient = new UserResourceClient();
        userResourceClient.removeBankAccount(nationalId);

       showBankAccountStateDialogue("The bank account has been removed successuflly");
    }

}