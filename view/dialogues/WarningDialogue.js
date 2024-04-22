
class WarningDialogue {

    constructor(message) {
        this.message = message;
    }

    getHtml() {
        
        return "<div class=\"modal-content\">" +
                    "<p>" + this.message + "</p>" +
                    "<button id=\"ok-btn\" onclick=\"closeWarningDialogue()\">Ok</button>" +
                "</div>";
    }

}