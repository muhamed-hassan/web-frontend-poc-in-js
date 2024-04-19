
class ConfirmationDialogue {

    constructor(message) {
        this.message = message;
    }

    getHtml() {
        
        return "<div class=\"modal-content\">" +
                    "<p>" + this.message + "</p>" +
                    "<button id=\"ok-btn\" onclick=\"confirmBankAccountRemoval()\">Ok</button>" +
                "</div>";
    }

}