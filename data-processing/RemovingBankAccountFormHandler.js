
class RemovingBankAccountFormHandler {

    processForm() {

        var nationalId = localStorage.getItem("nationalId");        
        localStorage.removeItem("nationalId");
        localStorage.removeItem("iban");
        
        console.log(nationalId);
    }

}