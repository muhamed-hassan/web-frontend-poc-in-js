
function launcher() {

    var templateConstructor = new TemplateConstructor();
    templateConstructor.constructHeader();
    templateConstructor.constructContent();
    templateConstructor.constructFooter();

    // start working with replaceble content here
    var content = document.getElementById("content");
    content.setAttribute("class", "container");

    var mainPage = new MainPage();
    content.innerHTML = mainPage.getHtml();

    var footer = document.getElementById("footer");
    var root = document.getElementById("root");
    root.insertBefore(content, footer);
}

// Main menu navigation
function navigateTo(element) {

    var action = element.getAttribute("id");
    var pageContent;

    // start drawing the required pg with content segment
    switch (action) {
        case "openBankAccount":
            document.title = "Open bank account";
            var openingBankAccountPage = new OpeningBankAccountPage();
            pageContent = openingBankAccountPage.getHtml();          
            break;
        case "viewBankAccount":
            document.title = "Search in bank accounts";
            var searchingInBankAccountsPage = new SearchingInBankAccountsPage();
            pageContent = searchingInBankAccountsPage.getHtml();
            var targetPage = "bankAccountDetails";
            localStorage.setItem("targetPage", targetPage);
            break;
        case "updateBankAccount":
            document.title = "Search in bank accounts";
            var searchingInBankAccountsPage = new SearchingInBankAccountsPage();
            pageContent = searchingInBankAccountsPage.getHtml();
            var targetPage = "updateBankAccount";
            localStorage.setItem("targetPage", targetPage);
            break;
        case "removeBankAccount":
            document.title = "Search in bank accounts";
            var searchingInBankAccountsPage = new SearchingInBankAccountsPage();
            pageContent = searchingInBankAccountsPage.getHtml();
            var targetPage = "removeBankAccount";
            localStorage.setItem("targetPage", targetPage);
            break;
        case "viewBankAccountsInPages":
            document.title = "Bank accounts";
            // do the initial call to fetch data here                  
            localStorage.removeItem("currentIndex");
            var currentIndex = 0;
            var userResourceClient = new UserResourceClient();
            var bankAccounts = userResourceClient.getBriefBankAccountsInPages(currentIndex);
            var viewingBankAccountsInPages = new ViewingBankAccountsInPages();
            pageContent = viewingBankAccountsInPages.getHtml(bankAccounts);
            localStorage.setItem("currentIndex", currentIndex);  
            break;
        case "backToMain":
            document.title = "Home";
            var mainPage = new MainPage();
            pageContent = mainPage.getHtml();
            break;
        default:
            throw new Error("Unknown action !!!");
    }

    addContentToTemplate(pageContent);
}

function addContentToTemplate(pageContent) {

    var root = document.getElementById("root");
    var content = document.getElementById("content");
    var footer = document.getElementById("footer");
    content.innerHTML = pageContent;
    root.insertBefore(content, footer);
}

function getDummy50BankAccounts(index) {

    /*
    index: 0, 1, 2, 3, 4, ...
    10 => cursor: 0 - 9
    20 => cursor: 10 - 19
    30 => cursor: 20 - 29
    40 => cursor: 30 - 39
    50 => cursor: 40 - 49

    (pageSize * (index + 1) ) - 1

    (10 * (0 + 1) ) - 1 => 9
    (10 * (1 + 1) ) - 1 => 19
    (10 * (2 + 1) ) - 1 => 29
    (10 * (3 + 1) ) - 1 => 39
    (10 * (4 + 1) ) - 1 => 49
    */

    // {"name":"Elizabeth James","nationalId":"99996670580000","iban":"GB29NWBK60161357832162","balance":0.0}
    var pageSize = 10;
    var loopStartPoint = index * pageSize;
    var loopEndPoint = (pageSize * (index + 1) ) - 1;
    var bankAccounts = [];      
    for (var cursor = loopStartPoint; cursor <= loopEndPoint; cursor++) {
        var bankAccount = {"name":"Name of " + cursor,
        "nationalId":"9999667058000" + cursor,
        "iban":"GB29NWBK6016135783216" + cursor,
        "balance":1000 + cursor * 2};
        bankAccounts.push(bankAccount);
    }
    return bankAccounts;
}