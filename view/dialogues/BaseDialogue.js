
class BaseDialogue {

    constructor(dialogueBody, action) {
        this.dialogueBody = dialogueBody;
        this.action = action;
    }

    getHtml() {
        
        return "<div class=\"modal-content\">" +
                    "<p>" + this.dialogueBody + "</p>" +
                    "<button id=\"ok-btn\" onclick=\"" + this.action + "()\">Ok</button>" +
                "</div>";
    }

}