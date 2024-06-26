
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

function dimForm(submittedForm) {

    var formElements = submittedForm.elements;
    for (var cursor = 0; cursor < formElements.length; cursor++) {
        formElements[cursor].disabled = true;
    }
}