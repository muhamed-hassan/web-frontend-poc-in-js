
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

function navigateTo(element) {

    var action = element.getAttribute("id");

    var root = document.getElementById("root");
    var content = document.getElementById("content");
    var footer = document.getElementById("footer");
    var pageContent;

    // start drawing the required pg with content segment
    switch( action ) {
        case "openBankAccount":
            document.title = "Open bank account";
            var openingBankAccountPage = new OpeningBankAccountPage();
            pageContent = openingBankAccountPage.getHtml();          
            break;
        case "viewBankAccount":
        case "updateBankAccount":
        case "removeBankAccount":
            document.title = "Search in bank accounts";
            var searchingInBankAccountsPage = new SearchingInBankAccountsPage();
            pageContent = searchingInBankAccountsPage.getHtml();
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

// TODO: extract those functions in a FormHandler file following procedural style
function submitForm(event) {

    event.preventDefault();

    console.log(event.srcElement);

    var submittedForm = event.srcElement.id;
    switch( submittedForm ) {
        case "openingBankAccountForm":
            var openingBankAccountPage = new OpeningBankAccountPage();
            openingBankAccountPage.processForm(event.srcElement);
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