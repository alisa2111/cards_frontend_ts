export class Patient {
    surname: string;
    name: string;
    patronymic: string;
    email: string;
    phone: string;
    address: string;

    constructor(surname: string , name: string, patronymic: string, email: string, phone: string, address:string){
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}