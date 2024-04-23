
function showModal(dialogueId, modalBody) {

    var root = document.getElementById("root");    
    var dialogueElement = document.createElement("div");    
    dialogueElement.setAttribute("id", dialogueId);
    dialogueElement.classList.add("modal");
    dialogueElement.innerHTML = modalBody;
    dialogueElement.style.display = "block";    
    root.appendChild(dialogueElement);
}

function hideModal(dialogueId) {

    var dialogueElement = document.getElementById(dialogueId);
    dialogueElement.style.display = "none";
    dialogueElement.remove();
}

function showConfirmationDialogue() {

    var iban = localStorage.getItem("iban");
    var confirmationMessage = "Are you sure that you want to delete the account with IBAN: " + iban + "?";
    var confirmationDialogue = new ConfirmationDialogue(confirmationMessage);

    showModal("confirmationDialogue", confirmationDialogue.getHtml());
}

function confirmBankAccountRemoval() {

    hideModal("confirmationDialogue");

    var removingBankAccountFormHandler = new RemovingBankAccountFormHandler();
    removingBankAccountFormHandler.processForm();
}

function showWarningDialogue(message) {

    var warningDialogue = new WarningDialogue(message);

    showModal("warningDialogue", warningDialogue.getHtml());
}

function closeWarningDialogue() {

    hideModal("warningDialogue");
}

function showBankAccountDetailsDialogue(nationalId) {

    // fetch the detailed-view of bankDetails using its nationalId
    var bankAccountDetails = {"nationalId":"99996670580000","cellPhone":"07700900603","email":"inga.ulli.2023@gmail.com","mailingAddress":"3a High Street, Hedge End, SOUTHAMPTON, SO31 4NG","name":"Inga Ulli","dateOfBirth":"01-03-1990","iban":"GB29NWBK60161361444911","balance":0.0,"currency":"GBP"};    
    var formattedBankAccountDetails = bankAccountDetails.name + " - " + bankAccountDetails.nationalId + " - " + bankAccountDetails.cellPhone + " - " + 
                                        bankAccountDetails.email + " - " + bankAccountDetails.mailingAddress + " - " + bankAccountDetails.dateOfBirth + " - " + 
                                        bankAccountDetails.iban + " - " + bankAccountDetails.balance + " - " + bankAccountDetails.currency;
    var bankAccountDetailsDialogue = new BankAccountDetailsDialogue(formattedBankAccountDetails);

    showModal("bankAccountDetailsDialogue", bankAccountDetailsDialogue.getHtml());
}

function closeBankAccountDetailsDialogue() {

    hideModal("bankAccountDetailsDialogue");
}