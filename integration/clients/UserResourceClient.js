
class UserResourceClient extends HttpClient {

    constructor() {
        super("http://localhost:8080/");
    }

    createBankAccount(userInfoCreateModel) {  

        try { 

            var requestUrl = "v1/users";
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var requestPayload = JSON.stringify(userInfoCreateModel);
            this.doPost(requestUrl, requestHeaders, requestPayload);

        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::UserResourceClient.createBankAccount()";
            console.error(errMsg);
            console.error(error + "\n\n");
        }
    }

    getDetailedBankAccount(nationalId) {

        var userInfoReadModel;    
        try { 

            var requestUrl = "v1/users/" + nationalId;
            var requestHeaders = new Map();
            requestHeaders.set("Accept", "application/json");
            var response = this.doGet(requestUrl, requestHeaders);        
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
            
            var requestUrl = "v1/users";
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var requestPayload = JSON.stringify(userInfoUpdateModel);
            this.doPut(requestUrl, requestHeaders, requestPayload);

        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::UserResourceClient.updateBankAccount()";
            console.error(errMsg);
            console.error(error + "\n\n");  
        }
    }

    removeBankAccount(nationalId) {

        try {     

            var requestUrl = "v1/users/" + nationalId;
            this.doDelete(requestUrl);

        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::UserResourceClient.removeBankAccount()";
            console.error(errMsg);
            console.error(error + "\n\n");    
        }
    }

    getBriefBankAccountsInPages(requestedPageIndex) {

        var collectedElements;
        try {       

            var requestUrl = "v1/users?pageIndex=" + requestedPageIndex;
            var requestHeaders = new Map();
            requestHeaders.set("Accept", "application/json");
            var response = this.doGet(requestUrl, requestHeaders);        
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