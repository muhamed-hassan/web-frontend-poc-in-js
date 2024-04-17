
function launcher() {

    var templateConstructor = new TemplateConstructor();
    templateConstructor.constructHeader();
    templateConstructor.constructContent();
    templateConstructor.constructFooter();

    // start working with replaceble content here
    var root = document.getElementById("root");
    
    var content = document.getElementById("content");
    content.setAttribute("class", "container");  
    var mainPage = new MainPage();
    content.innerHTML = mainPage.getHtml();

    var footer = document.getElementById("footer");
    root.insertBefore(content, footer);
}

// Main menu navigation
function navigateTo(element) {

    var action = element.getAttribute("id");

    var root = document.getElementById("root");
    var content = document.getElementById("content");
    var footer = document.getElementById("footer");
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
            document.title = "A new title";
            // draw the target pg
            break;
        case "backToMain":
            document.title = "Home";
            var mainPage = new MainPage();
            pageContent = mainPage.getHtml();
            break;
        default:
            throw new Error("Unknown action !!!");
    }

    content.innerHTML = pageContent;
    root.insertBefore(content, footer);
}