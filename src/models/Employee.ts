export class Employee {
    id: number;
    lastname: string;
    firstname: string;
    secondname: string;
    email: string;
    password: string;
    department: string;
    // image: string;
    specialty:string;
    firstPractiseDate: string;

    constructor(
      id: number,
      lastname: string,
      firstname: string,
      secondname: string,
      email: string,
      password: string,
      department: string,
      specialty: string,
      firstPractiseDate: string
    )
    {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.secondname = secondname;
        this.email = email;
        this.password = password;
        this.department = department;
        this.specialty = specialty;
        this.firstPractiseDate = firstPractiseDate;
    }
}
