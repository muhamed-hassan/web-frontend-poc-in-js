
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

    var viewingBankAccountsUsingPaginationFormHandler = new ViewingBankAccountsUsingPaginationFormHandler();
    viewingBankAccountsUsingPaginationFormHandler.processForm(nationalId);

    var formattedBankAccountDetails = localStorage.getItem("formattedBankAccountDetails");
    var bankAccountDetailsDialogue = new BankAccountDetailsDialogue(formattedBankAccountDetails);

    showModal("bankAccountDetailsDialogue", bankAccountDetailsDialogue.getHtml());
}

function closeBankAccountDetailsDialogue() {

    localStorage.removeItem("formattedBankAccountDetails");

    hideModal("bankAccountDetailsDialogue");
}

function showBankAccountStateDialogue(message) {

    var bankAccountStateDialogue = new BankAccountStateDialogue(message);

    showModal("bankAccountStateDialogue", bankAccountStateDialogue.getHtml());
}

function closeBankAccountStateDialogue() {

    hideModal("bankAccountStateDialogue");

    document.title = "Home";
    var mainPage = new MainPage();
    var pageContent = mainPage.getHtml();
    addContentToTemplate(pageContent);
}

/* ****************************************************************************************************** */

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