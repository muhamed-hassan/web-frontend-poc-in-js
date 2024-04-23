
function previous() {

    var currentIndex = parseInt(localStorage.getItem("currentIndex"));
    
    if (currentIndex == 0) {
        showWarningDialogue("Moving back on the first page of data is not allowed");
        return;
    }

    // fetch data after decrementing the currentIndex by 1
    currentIndex -= 1;
    var viewingBankAccountsInPages = new ViewingBankAccountsInPages();
    var pageContent = viewingBankAccountsInPages.getHtml(getDummy50BankAccounts(currentIndex));  
    addContentToTemplate(pageContent);

    localStorage.setItem("currentIndex", currentIndex);
}

function next() {
    
    var currentIndex = parseInt(localStorage.getItem("currentIndex"));

    currentIndex += 1;
    // fetch data after incrementing the currentIndex by 1
    var fetchedData = getDummy50BankAccounts(currentIndex);
    if (fetchedData.length == 0) {
        currentIndex -= 1;
        showWarningDialogue("No data found");
    } else {
        var viewingBankAccountsInPages = new ViewingBankAccountsInPages();
        var pageContent = viewingBankAccountsInPages.getHtml(fetchedData);        
        addContentToTemplate(pageContent);
        
        localStorage.setItem("currentIndex", currentIndex);
    }
}