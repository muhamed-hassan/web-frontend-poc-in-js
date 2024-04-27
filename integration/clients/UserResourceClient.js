
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
            this.httpClient.doPost(this.apiConfigs.getDnsHost() + this.apiConfigs.getUsersApiPath(), 
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
            var response = this.httpClient.doGet(this.apiConfigs.getDnsHost() + this.apiConfigs.getUsersApiPath() + "/" + nationalId, 
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
            this.httpClient.doPut(this.apiConfigs.getDnsHost() + this.apiConfigs.getUsersApiPath(), 
                                    requestHeaders, 
                                    requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::UserResourceClient.updateBankAccount()";
            console.error(errMsg);
            console.error(error + "\n\n");  
        }
    }

    removeBankAccount(nationalId) {
        try {       
            this.httpClient.doDelete(this.apiConfigs.getDnsHost() + this.apiConfigs.getUsersApiPath() + "/" + nationalId);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::UserResourceClient.removeBankAccount()";
            console.error(errMsg);
            console.error(error + "\n\n");    
        }
    }

    getBriefBankAccountsInPages(requestedPageIndex) {
        var collectedElements;
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Accept", "application/json");
            var response = this.httpClient.doGet(this.apiConfigs.getDnsHost() + this.apiConfigs.getUsersApiPath() + "?pageIndex=" + requestedPageIndex, 
                                                requestHeaders);        
            var parsedResponse = JSON.parse(response);
            collectedElements = new Array();
            for (var cursor = 0; cursor < parsedResponse.length; cursor++) {
                var briefUserInfoReadModel = new BriefUserInfoReadModel(parsedResponse[cursor].name, parsedResponse[cursor].nationalId, 
                    parsedResponse[cursor].iban, parsedResponse[cursor].balance);
                collectedElements.push(briefUserInfoReadModel);            
            }
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::UserResourceClient.getBriefBankAccountsInPages()";
            console.error(errMsg);
            console.error(error + "\n\n");    
        }
        return collectedElements;
    }

}