
class UserResourceClient {

    constructor() {
        this.httpClient = new HttpClient();
    }

    createBankAccount(userInfoCreateModel) {    
        var requestPayload;
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            requestPayload = JSON.stringify(userInfoCreateModel);
            this.httpClient.doPost("http://localhost:8080/v1/users", requestHeaders, requestPayload);
        } catch (error) {
            var errMsg = "Encountered an error during communicating with the backend. SOURCE::UserResourceClient.createBankAccount()";
            console.error(errMsg);
            console.error(error + "\n\n");        
            return errMsg;
        }
        return "UserResourceClient.createBankAccount() requestPayload:: " + requestPayload;
    }

}