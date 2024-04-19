
class UpdatingBankAccountPage extends BasePage {

    getHtml(userInfoReadModel) {

        return "<form id=\"updatingBankAccountForm\" onsubmit=\"submitForm(event)\" onreset=\"resetForm(event)\">" +
                    "<table class=\"updating-bank-account-view\">" +
                        "<tr>" +
                            "<td> <label for=\"cellPhone\">Cell phone:</label> </td>" +
                            "<td> <input id=\"cellPhone\" type=\"text\" value=\"" + userInfoReadModel.cellPhone + "\"/> </td>" +
                            "<td style=\"width: 75px;\"></td>" +
                            "<td> <label for=\"email\">Email:</label> </td>" +
                            "<td> <input id=\"email\" type=\"email\" value=\"" + userInfoReadModel.email + "\"/> </td>" +
                        "</tr>" +
                        "<tr>" +
                            "<td> <label for=\"mailingAddress\">Mailing address:</label> </td>" +
                            "<td> <input id=\"mailingAddress\" type=\"text\" value=\"" + userInfoReadModel.mailingAddress + "\"/> </td>" +
                            "<td colspan=\"3\" style=\"width: 75px;\"></td>" +                            
                        "</tr>" +
                        "<tr>" + 
                            "<td colspan=\"5\" style=\"width: 75px; height: 50px\"></td>" +
                        "</tr>" +
                        "<tr>" +
                            "<td colspan=\"5\">" + 
                                "<button id=\"update-btn\" type=\"submit\">Update</button>" +
                                "<button id=\"cancel-btn\" type=\"reset\">Cancel</button>" +
                            "</td>" +
                        "</tr>" +
                    "</table>" +
                "</form>" + 
                super.getBackToMainHtml();
    }

}