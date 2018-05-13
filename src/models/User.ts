export class User {
    id:string;
    email: string;
    role: string;
    isSignedIn: boolean = false;

    constructor(id_:string, email_ : string , role_ : string ) {
        this.id = id_;
        this.email = email_;
        this.role = role_;
    }
}