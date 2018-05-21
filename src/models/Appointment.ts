export class Appointment {

    surname: string;
    firstname: string;
    lastname: string;
    date: string;
    time: string;

    constructor(
        surname: string,
        firstname: string,
        lastname: string,
        date: string,
        time: string
    )
    {

        this.surname = surname;
        this.firstname = firstname;
        this.lastname = lastname;
        this.date = date;
        this.time = time;
    }
}