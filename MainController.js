
function launcher() {

    constructHeader();
    constructFooter();

    // start working with replaceble content here
    var root = document.getElementById("root");

    var content = document.createElement("div");
    content.setAttribute("class", "container");  
    var mainPageContent = "<ul>" + 
                            "<li> <a class=\"main-pg-link\" id=\"openBankAccount\" href=\"#\">Open bank account</a> </li>" + 
                            "<li> <a class=\"main-pg-link\" id=\"viewBankAccount\" href=\"#\">View bank account</a> </li>" +
                            "<li> <a class=\"main-pg-link\" id=\"updateBankAccount\" href=\"#\">Update bank account</a> </li>" +
                            "<li> <a class=\"main-pg-link\" id=\"removeBankAccount\" href=\"#\">Remove bank account</a> </li>" +
                            "<li> <a class=\"main-pg-link\" id=\"viewBankAccountsInPages\" href=\"#\">View bank accounts in pages</a> </li>" +
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

function constructFooter() {

    var root = document.getElementById("root");

    var footer = document.createElement("footer");
    footer.setAttribute("id", "footer");
    root.appendChild(footer);
}