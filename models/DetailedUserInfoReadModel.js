
class DetailedUserInfoReadModel extends UserInfoModel {

    constructor(name, dateOfBirth, iban, balance, currency, nationalId, cellPhone, email, mailingAddress) {
        super(nationalId, cellPhone, email, mailingAddress);
        this.name = name;
        this.dateOfBirth = dateOfBirth; // dd-MM-yyyy   
        this.iban = iban;
        this.balance = balance;
        this.currency = currency;
    }

}