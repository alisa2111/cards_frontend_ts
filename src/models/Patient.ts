export class Patient {
    id: number;
    surname: string;
    name: string;
    patronymic: string;
    gender: string;
    email: string;
    phoneNumber: string;
    address: string;
    password:string;
    birthday:string;

    constructor(
        id: number,
        surname: string ,
        name: string,
        patronymic: string,
        gender: string,
        email:string,
        password:string,
        address:string,
        phoneNumber: string,
        birthday:string
    )
    {
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.gender = gender;
        this.password = password;
        this.birthday = birthday;
    }
}