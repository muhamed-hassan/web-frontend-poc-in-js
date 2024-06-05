
class RemovingBankAccountHandler {

    processRequest() {

        var nationalId = sessionStorage.getItem("nationalId");        
        sessionStorage.removeItem("nationalId");
        sessionStorage.removeItem("iban");
        
        var userResourceClient = new UserResourceClient();
        userResourceClient.removeBankAccount(nationalId);

       showBankAccountStateDialogue("The bank account has been removed successuflly");
    }

}