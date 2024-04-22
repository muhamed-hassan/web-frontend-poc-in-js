
class ViewingBankAccountsInPages extends BasePage {

    // generate 10 records constantly even if there is no data enough to be displayed
    getHtml(bankAccounts) {

        var html = "<div class=\"viewing-bank-accounts-view\">" + 
                        "<table>" +
                            "<tr>" +
                                "<th> Name </th>" +
                                "<th> National ID </th>" +
                                "<th> IBAN </th>" +
                                "<th> Balance </th>" +
                            "</tr>";
        for (var cursor = 0; cursor < bankAccounts.length; cursor++) {
            var row = "<tr onclick=\"showBankAccountDetailsDialogue(" + bankAccounts[cursor].nationalId + ")\">" +
                            "<td> " + bankAccounts[cursor].name + " </td>" +
                            "<td> " + bankAccounts[cursor].nationalId + " </td>" +
                            "<td> " + bankAccounts[cursor].iban + " </td>" +
                            "<td> " + bankAccounts[cursor].balance + " </td>" +
                        "</tr>";
            html += row;
        }
        html +=         "</table>" +
                        "<div class=\"viewing-bank-accounts-view-footer\">" +
                            "<button id=\"previous-btn\" onclick=\"previous()\">Previous</button>" +
                            "<button id=\"next-btn\" onclick=\"next()\">Next</button>" +
                        "</div>" +
                    "</div>" +
                super.getBackToMainHtml();

        return html;
    }

}