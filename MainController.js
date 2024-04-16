
function launcher() {

    constructHeader();
    constructContent();
    constructFooter();

    // start working with replaceble content here
    var root = document.getElementById("root");

    var mainPage = new MainPage();
    var content = document.getElementById("content");
    content.setAttribute("class", "container");  
    content.innerHTML = mainPage.getHtml();

    var footer = document.getElementById("footer");
    root.insertBefore(content, footer);
}

function constructHeader() {

    var root = document.getElementById("root");

    var header = document.createElement("header");
    header.setAttribute("id", "header");
    root.appendChild(header);
}

function constructContent() {

    var root = document.getElementById("root");

    var content = document.createElement("div");
    content.setAttribute("id", "content");
    root.appendChild(content);
}

function constructFooter() {

    var root = document.getElementById("root");

    var footer = document.createElement("footer");
    footer.setAttribute("id", "footer");
    root.appendChild(footer);
}

function getHtmlOfSearchInBankAccountsPage() {

    return "<form class=\"searching-in-bank-accounts-form\">" +
                "<table>" +
                    "<tr>" +
                        "<td> <label for=\"nationalId\">National ID:</label> </td>" +
                        "<td> <input id=\"nationalId\" type=\"text\" /> </td>" +
                        "<td colspan=\"3\" style=\"width: 200px;\"></td>" +
                    "</tr>" +
                    "<tr>" + 
                        "<td colspan=\"5\" style=\"width: 75px; height: 50px\"></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td colspan=\"5\">" + 
                            "<button id=\"search-btn\" type=\"submit\">Search</button>" +
                            "<button id=\"cancel-btn\" type=\"reset\">Cancel</button>" +
                        "</td>" +
                    "</tr>" +
                "</table>" +
            "</form>" + 
            "<a class=\"back-to-main\" id=\"backToMain\" href=\"#\" onclick=\"navigateTo(this)\">" + 
                "Back to main" + 
            "</a>";
}

function navigateTo(element) {

    var action = element.getAttribute("id");

    var root = document.getElementById("root");
    var content = document.getElementById("content");
    content.innerHTML = "";
    var footer = document.getElementById("footer");
    var pageContent;

    // start drawing the required pg with content segment
    switch( action ) {
        case "openBankAccount":
            document.title = "Open bank account";
            pageContent = "<form class=\"opening-bank-account-form\">" +
                                "<table>" +
                                    "<tr>" +
                                        "<td> <label for=\"name\">Name:</label> </td>" +
                                        "<td> <input id=\"name\" type=\"text\" /> </td>" +
                                        "<td style=\"width: 75px;\"></td>" +
                                        "<td> <label for=\"dob\">Date of birth:</label> </td>" +
                                        "<td> <input id=\"dob\" type=\"date\" /> </td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td> <label for=\"nationalId\">National ID:</label> </td>" +
                                        "<td> <input id=\"nationalId\" type=\"text\" /> </td>" +
                                        "<td style=\"width: 75px;\"></td>" +
                                        "<td> <label for=\"cellPhone\">Cell phone:</label> </td>" +
                                        "<td> <input id=\"cellPhone\" type=\"text\" /> </td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td> <label for=\"email\">Email:</label> </td>" +
                                        "<td> <input id=\"email\" type=\"email\" /> </td>" +
                                        "<td style=\"width: 75px;\"></td>" +
                                        "<td> <label for=\"mailingAddress\">Mailing address:</label> </td>" +
                                        "<td> <input id=\"mailingAddress\" type=\"text\" /> </td>" +
                                    "</tr>" +
                                    "<tr>" + 
                                        "<td colspan=\"5\" style=\"width: 75px; height: 50px\"></td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td colspan=\"5\">" + 
                                            "<button id=\"save-btn\" type=\"submit\">Save</button>" +
                                            "<button id=\"cancel-btn\" type=\"reset\">Cancel</button>" +
                                        "</td>" +
                                    "</tr>" +
                                "</table>" +
                            "</form>" + 
                            "<a class=\"back-to-main\" id=\"backToMain\" href=\"#\" onclick=\"navigateTo(this)\">" + 
                                "Back to main" + 
                            "</a>";            
            break;
        case "viewBankAccount":
        case "updateBankAccount":
        case "removeBankAccount":
            document.title = "Search in bank accounts";
            pageContent = getHtmlOfSearchInBankAccountsPage();
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