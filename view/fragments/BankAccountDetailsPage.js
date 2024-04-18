
class BankAccountDetailsPage extends BasePage {

    getHtml(userInfoReadModel) {

        return "<table class=\"bank-account-details-view\">" +
                    "<tr>" +
                        "<td class=\"bank-account-details-view-label\"> Name: </td>" +
                        "<td> " + userInfoReadModel.name + " </td>" +
                        "<td style=\"width: 100px;\"></td>" +
                        "<td class=\"bank-account-details-view-label\"> Date of birth: </td>" +
                        "<td> " + userInfoReadModel.dateOfBirth + " </td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td class=\"bank-account-details-view-label\"> National ID: </td>" +
                        "<td> " + userInfoReadModel.nationalId + " </td>" +
                        "<td style=\"width: 100px;\"></td>" +
                        "<td class=\"bank-account-details-view-label\"> Cell phone: </td>" +
                        "<td> " + userInfoReadModel.cellPhone + " </td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td class=\"bank-account-details-view-label\"> Email: </td>" +
                        "<td> " + userInfoReadModel.email + " </td>" +
                        "<td style=\"width: 100px;\"></td>" +
                        "<td class=\"bank-account-details-view-label\"> Mailing address: </td>" +
                        "<td> " + userInfoReadModel.mailingAddress + " </td>" +
                    "</tr>" +
                    "<tr>" + 
                        "<td colspan=\"5\" style=\"width: auto; height: 50px\"></td>" +
                    "</tr>" +
                    "<tr>" + 
                        "<td colspan=\"5\" style=\"width: auto; height: 75px\" class=\"bank-account-details-view-acc-details\">" +
                            "# Opened account information:" +
                        "</td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td class=\"bank-account-details-view-label\"> IBAN: </td>" +
                        "<td> " + userInfoReadModel.iban + " </td>" +
                        "<td colspan=\"3\"></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td class=\"bank-account-details-view-label\"> Balance: </td>" +
                        "<td> " + userInfoReadModel.balance + " </td>" +
                        "<td style=\"width: 100px;\"></td>" +
                        "<td class=\"bank-account-details-view-label\"> Currency: </td>" +
                        "<td> " + userInfoReadModel.currency + " </td>" +
                    "</tr>" +
                "</table>" +
                super.getBackToMainHtml();
    }

}