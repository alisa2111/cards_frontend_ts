export class Employee {
    department: string;
    image: string;
    text: string;

    constructor(
        department: string ,
        image: string,
        text: string
    )
    {
        this.department = department;
        this.image = image;
        this.text = text;
    }
}