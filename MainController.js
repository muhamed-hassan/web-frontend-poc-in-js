
function launcher() {

    constructHeader();
    constructContent();
    constructFooter();

    // start working with replaceble content here
    var root = document.getElementById("root");

    var content = document.getElementById("content");
    content.setAttribute("class", "container");  
    var mainPageContent = "<ul>" + 
                                "<li>" + 
                                    "<a class=\"main-pg-link\" id=\"openBankAccount\" href=\"#\" onclick=\"navigateTo(this)\">" + 
                                        "Open bank account" + 
                                    "</a>" + 
                                "</li>" + 
                                "<li>" + 
                                    "<a class=\"main-pg-link\" id=\"viewBankAccount\" href=\"#\" onclick=\"navigateTo(this)\">" + 
                                        "View bank account" + 
                                    "</a>" + 
                                "</li>" +
                                "<li>" + 
                                    "<a class=\"main-pg-link\" id=\"updateBankAccount\" href=\"#\" onclick=\"navigateTo(this)\">" + 
                                        "Update bank account" + 
                                    "</a>" + 
                                "</li>" +
                                "<li>" + 
                                    "<a class=\"main-pg-link\" id=\"removeBankAccount\" href=\"#\" onclick=\"navigateTo(this)\">" + 
                                        "Remove bank account" + 
                                    "</a>" + 
                                "</li>" +
                                "<li>" + 
                                    "<a class=\"main-pg-link\" id=\"viewBankAccountsInPages\" href=\"#\" onclick=\"navigateTo(this)\">" + 
                                        "View bank accounts in pages" + 
                                    "</a>" + 
                                "</li>" +
                            "</ul>";
    content.innerHTML = mainPageContent;

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

function navigateTo(element) {

    var action = element.getAttribute("id");
    console.log(action);

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
                                        /*"</td>" +
                                        "<td style=\"width: 75px;\"></td>" +
                                        "<td colspan=\"2\">" + 
                                            "<button id=\"cancel-btn\" type=\"reset\">Cancel</button>" +*/
                                        "</td>" +
                                    "</tr>" +
                                "</table>" +
                            "</form>" + 
                            "<a class=\"back-to-main\" id=\"backToMain\" href=\"#\" onclick=\"navigateTo(this)\">" + 
                                "Back to main" + 
                            "</a>";            
            break;
        case "viewBankAccount":
            document.title = "A new title";
            // draw the target pg
            break;
        case "updateBankAccount":
            document.title = "A new title";
            // draw the target pg
            break;
        case "removeBankAccount":
            document.title = "A new title";
            // draw the target pg
            break;
        case "viewBankAccountsInPages":
            document.title = "A new title";
            // draw the target pg
            break;
        case "backToMain":
            document.title = "Home";
            // draw the target pg
            break;
        default:
            throw new Error("Unknown action !!!");
    }

    content.innerHTML = pageContent;
    root.insertBefore(content, footer);
}