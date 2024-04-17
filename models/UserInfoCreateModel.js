
class UserInfoCreateModel extends UserInfoModel {

    constructor(name, dateOfBirth, nationalId, cellPhone, email, mailingAddress) {
        super(nationalId, cellPhone, email, mailingAddress);
        this.name = name;
        this.dateOfBirth = dateOfBirth; // dd-MM-yyyy        
    }

}