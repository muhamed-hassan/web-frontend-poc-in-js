
class UserResourceClient {

    constructor() {
        this.httpClient = new HttpClient();
        this.apiConfigs = new ApiConfigs();
    }

    createBankAccount(userInfoCreateModel) {    
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var requestPayload = JSON.stringify(userInfoCreateModel);
            this.httpClient.doPost(this.apiConfigs.getBaseUri() + this.apiConfigs.getUsersApiPath(), 
                                    requestHeaders, 
                                    requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::UserResourceClient.createBankAccount()";
            console.error(errMsg);
            console.error(error + "\n\n");
        }
    }

    getDetailedBankAccount(nationalId) {
        var userInfoReadModel;    
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Accept", "application/json");
            var response = this.httpClient.doGet(this.apiConfigs.getBaseUri() + this.apiConfigs.getUsersApiPath() + "/" + nationalId, 
                                                    requestHeaders);        
            var parsedResponse = JSON.parse(response);
            userInfoReadModel = new DetailedUserInfoReadModel(
                parsedResponse.name, parsedResponse.dateOfBirth, parsedResponse.iban, parsedResponse.balance, 
                parsedResponse.currency, parsedResponse.nationalId, parsedResponse.cellPhone, 
                parsedResponse.email, parsedResponse.mailingAddress); 
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::UserResourceClient.getDetailedBankAccount()";
            console.error(errMsg);
            console.error(error + "\n\n");
        }
        return userInfoReadModel;
    }

    updateBankAccount(userInfoUpdateModel) {
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var requestPayload = JSON.stringify(userInfoUpdateModel);
            this.httpClient.doPut(this.apiConfigs.getBaseUri() + this.apiConfigs.getUsersApiPath(), 
                                    requestHeaders, 
                                    requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::UserResourceClient.updateBankAccount()";
            console.error(errMsg);
            console.error(error + "\n\n");  
        }
    }

}