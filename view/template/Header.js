
class Header {

    getHtml() {

        var menu = "<div class=\"dropdown\">" +
                        "<p class=\"dropdown-name\">CRUD operations</p>" +
                        "<div class=\"dropdown-content\">" +
                            "<a id=\"openBankAccount\" href=\"#\" onclick=\"navigateTo(this)\">" +
                                "Open bank account" +
                            "</a>" +
                            "<a id=\"viewBankAccount\" href=\"#\" onclick=\"navigateTo(this)\">" +
                                "View bank account" +
                            "</a>" +
                            "<a id=\"updateBankAccount\" href=\"#\" onclick=\"navigateTo(this)\">" +
                                "Update bank account" +
                            "</a>" +
                            "<a id=\"removeBankAccount\" href=\"#\" onclick=\"navigateTo(this)\">" +
                                "Remove bank account" +
                            "</a>" +
                            "<a id=\"viewBankAccountsInPages\" href=\"#\" onclick=\"navigateTo(this)\">" +
                                "View bank accounts in pages" +
                            "</a>" +
                        "</div>" +
                    "</div>";

        return menu;
    }
    
}