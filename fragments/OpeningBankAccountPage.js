
class OpeningBankAccountPage extends BasePage {

    getHtml() {

        return "<form id=\"openingBankAccountForm\" class=\"opening-bank-account-form\" onsubmit=\"submitForm(event)\" onreset=\"resetForm(event)\">" +
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
                super.getBackToMainHtml();
    }

    processForm(submittedForm) {

        var name = submittedForm["name"].value;
        var dob = submittedForm["dob"].value;
        var nationalId = submittedForm["nationalId"].value;
        var cellPhone = submittedForm["cellPhone"].value;
        var email = submittedForm["email"].value;
        var mailingAddress = submittedForm["mailingAddress"].value;
        var userInfoCreateModel = new UserInfoCreateModel(name, dob, nationalId, cellPhone, email, mailingAddress);

        console.log(userInfoCreateModel);
    }

}