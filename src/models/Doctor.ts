export class Doctor {
    surname: string;
    name: string;
    patronymic: string;
    email: string;
    password: string;
    department:string;
    specialty:string;
    practise_date:string;

    constructor(
        surname: string ,
        name: string,
        patronymic: string,
        email: string,
        password:string,
        department:string,
        specialty:string,
        practise_date:string
    )
    {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.email = email;
        this.password = password;
        this.department = department;
        this.specialty = specialty;
        this.practise_date = practise_date;
    }
}