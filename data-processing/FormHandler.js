
function submitForm(event) {

    event.preventDefault();

    var submittedForm = event.srcElement.id;
    switch (submittedForm) {
        case "openingBankAccountForm":
            var openingBankAccountFormHandler = new OpeningBankAccountFormHandler();
            openingBankAccountFormHandler.processForm(event.srcElement);
            break;
        case "searchingInBankAccountsForm":
            var searchingInBankAccountsFormHandler = new SearchingInBankAccountsFormHandler();
            searchingInBankAccountsFormHandler.processForm(event.srcElement);
            break;
        case "updatingBankAccountForm":
            var updatingBankAccountFormHandler = new UpdatingBankAccountFormHandler();
            updatingBankAccountFormHandler.processForm(event.srcElement);
            break;
        default:
            throw new Error("Unknown form !!!");
    }
}

function resetForm(event) {

    event.preventDefault();

    var form = event.srcElement;
    for (var cursor = 0; cursor < form.length; cursor++) {        
        form.elements[cursor].value = "";
    }
}

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