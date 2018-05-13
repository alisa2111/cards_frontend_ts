export class Patient {
    id: number;
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
        id: number,
        surname: string ,
        name: string,
        patronymic: string,
        gender: string,
        email:string,
        password:string,
        address:string,
        phone: string,
        birthday:string
    )
    {
        this.id = id;
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