
class BankAccountDetailsDialogue {

    constructor(bankDetails) {
        this.bankDetails = bankDetails;
    }

    // {nationalId: text, cellPhone: text, email: text, mailingAddress: text, name: text, dateOfBirth: text, iban: text, balance: float, currency: text}
    getHtml() {
        
        return "<div class=\"modal-content\">" +
                    "<p>" + 
                        this.bankDetails.name + " | " +
                        this.bankDetails.nationalId + " | " +
                        this.bankDetails.cellPhone + " | " + 
                        this.bankDetails.email + " | " + 
                        this.bankDetails.mailingAddress + " | " + 
                        this.bankDetails.dateOfBirth + " | " + 
                        this.bankDetails.iban + " | " + 
                        this.bankDetails.balance + " | " + 
                        this.bankDetails.currency + 
                    "</p>" +
                    "<button id=\"ok-btn\" onclick=\"closeBankAccountDetailsDialogue()\">Ok</button>" +
                "</div>";
    }

}