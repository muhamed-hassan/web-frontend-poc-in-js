
function showConfirmationDialogue() {

    var iban = localStorage.getItem("iban");
    var confirmationMessage = "Are you sure that you want to delete the account with IBAN: " + iban + "?";
    var confirmationDialogue = new ConfirmationDialogue(confirmationMessage);

    var root = document.getElementById("root");    
    var confirmationDialogueElement = document.createElement("div");    
    confirmationDialogueElement.setAttribute("id", "confirmationDialogue");
    confirmationDialogueElement.classList.add("modal");
    confirmationDialogueElement.innerHTML = confirmationDialogue.getHtml();
    confirmationDialogueElement.style.display = "block";    
    root.appendChild(confirmationDialogueElement);
}

function confirmBankAccountRemoval() {

    var confirmationDialogueElement = document.getElementById("confirmationDialogue");
    confirmationDialogueElement.style.display = "none";
    confirmationDialogueElement.remove();

    var removingBankAccountFormHandler = new RemovingBankAccountFormHandler();
    removingBankAccountFormHandler.processForm();
}

function showWarningDialogue(message) {

    var warningDialogue = new WarningDialogue(message);

    var root = document.getElementById("root");    
    var warningDialogueElement = document.createElement("div");    
    warningDialogueElement.setAttribute("id", "warningDialogue");
    warningDialogueElement.classList.add("modal");
    warningDialogueElement.innerHTML = warningDialogue.getHtml();
    warningDialogueElement.style.display = "block";    
    root.appendChild(warningDialogueElement);
}

function closeWarningDialogue() {

    var warningDialogueElement = document.getElementById("warningDialogue");
    warningDialogueElement.style.display = "none";
    warningDialogueElement.remove();
}

function showBankAccountDetailsDialogue(nationalId) {

    // fetch the detailed-view of bankDetails using its nationalId

    var bankAccountDetails = {"nationalId":"99996670580000","cellPhone":"07700900603","email":"inga.ulli.2023@gmail.com","mailingAddress":"3a High Street, Hedge End, SOUTHAMPTON, SO31 4NG","name":"Inga Ulli","dateOfBirth":"01-03-1990","iban":"GB29NWBK60161361444911","balance":0.0,"currency":"GBP"};
    var bankAccountDetailsDialogue = new BankAccountDetailsDialogue(bankAccountDetails);

    var root = document.getElementById("root");    
    var bankAccountDetailsDialogueElement = document.createElement("div");    
    bankAccountDetailsDialogueElement.setAttribute("id", "bankAccountDetailsDialogue");
    bankAccountDetailsDialogueElement.classList.add("modal");
    bankAccountDetailsDialogueElement.innerHTML = bankAccountDetailsDialogue.getHtml();
    bankAccountDetailsDialogueElement.style.display = "block";    
    root.appendChild(bankAccountDetailsDialogueElement);
}

function closeBankAccountDetailsDialogue() {

    var warningDialogueElement = document.getElementById("bankAccountDetailsDialogue");
    warningDialogueElement.style.display = "none";
    warningDialogueElement.remove();
}