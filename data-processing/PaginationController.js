
function previous() {

    var currentIndex = parseInt(sessionStorage.getItem("currentIndex"));    
    if (currentIndex == 0) {
        showWarningDialogue("Moving back on the first page of data is not allowed");
        return;
    }

    // fetch data after decrementing the currentIndex by 1
    currentIndex -= 1;
    var userResourceClient = new UserResourceClient();
    var bankAccounts = userResourceClient.getBriefBankAccountsInPages(currentIndex);

    var viewingBankAccountsUsingPaginationPage = new ViewingBankAccountsUsingPaginationPage();
    var pageContent = viewingBankAccountsUsingPaginationPage.getHtml(bankAccounts);  
    addContentToTemplate(pageContent);

    sessionStorage.setItem("currentIndex", currentIndex);
}

function next() {
    
    var currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
    currentIndex += 1;
    var userResourceClient = new UserResourceClient();

    var fetchedData = userResourceClient.getBriefBankAccountsInPages(currentIndex);
    if (fetchedData == undefined) {
        currentIndex -= 1;
        showWarningDialogue("No data found");
    } else {
        var viewingBankAccountsUsingPaginationPage = new ViewingBankAccountsUsingPaginationPage();
        var pageContent = viewingBankAccountsUsingPaginationPage.getHtml(fetchedData);        
        addContentToTemplate(pageContent);
        
        sessionStorage.setItem("currentIndex", currentIndex);
    }
}