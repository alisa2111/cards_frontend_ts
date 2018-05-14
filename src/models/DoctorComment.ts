export class DoctorComment {
    fios: string;
    date: string;
    info: string;

    constructor(
        fios: string,
        date: string,
        info: string
    ) {
        this.fios = fios;
        this.date = date;
        this.info = info;
    }
}