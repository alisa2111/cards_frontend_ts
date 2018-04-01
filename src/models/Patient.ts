export class Patient {
    surname: string;
    name: string;
    patronymic: string;
    gender: string;
    email: string;
    phone: string;
    address: string;
    password:string;
    birthday:string;

    constructor(
        surname: string ,
        name: string,
        patronymic: string,
        email: string,
        gender:string,
        password:string,
        address:string,
        phone: string,
        birthday:string
    )
    {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.gender = gender;
        this.password = password;
        this.birthday = birthday;
    }
}