
class SearchingInBankAccountsPage extends BasePage {

    getHtml() {

        return "<form id=\"searchingInBankAccountsForm\" onsubmit=\"submitForm(event)\" onreset=\"resetForm(event)\">" +
                    "<table class=\"searching-in-bank-accounts-view\">" +
                        "<tr>" +
                            "<td> <label for=\"nationalId\">National ID:</label> </td>" +
                            "<td> <input id=\"nationalId\" type=\"text\" /> </td>" +
                            "<td colspan=\"3\" style=\"width: 260px;\"></td>" +
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
                super.getBackToMainHtml();
    }

}