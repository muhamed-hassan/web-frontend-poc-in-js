
class ViewingBankAccountsUsingPaginationHandler {

    processRequest(nationalId) {

        // load user's info using its nationalId
        var userResourceClient = new UserResourceClient();
        var userInfoReadModel = userResourceClient.getDetailedBankAccount(nationalId);
        
        var formattedBankAccountDetails = userInfoReadModel.name + " - " + userInfoReadModel.nationalId + " - " + userInfoReadModel.cellPhone + " - " + 
                                            userInfoReadModel.email + " - " + userInfoReadModel.mailingAddress + " - " + userInfoReadModel.dateOfBirth + " - " + 
                                            userInfoReadModel.iban + " - " + userInfoReadModel.balance + " - " + userInfoReadModel.currency;

        sessionStorage.setItem("formattedBankAccountDetails", formattedBankAccountDetails);
    }

}