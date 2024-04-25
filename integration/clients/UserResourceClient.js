
class UserResourceClient {

    constructor() {
        this.httpClient = new HttpClient();
    }

    createBankAccount(userInfoCreateModel) {    
        try {       
            var requestHeaders = new Map();
            requestHeaders.set("Content-type", "application/json");
            var requestPayload = JSON.stringify(userInfoCreateModel);
            this.httpClient.doPost("http://localhost:8080/v1/users", requestHeaders, requestPayload);
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
            var response = this.httpClient.doGet("http://localhost:8080/v1/users/" + nationalId, requestHeaders);        
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

}