
class MainPage {

    getHtml() {

        return "<ul>" +
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
    }

}