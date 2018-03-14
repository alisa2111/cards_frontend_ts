export class User {
    email: string;
    role: string;
    // isSignedIn: boolean = false;
    // isSignedUp: boolean = false;

    constructor( email_ : string , role_ : string ) {
        this.email = email_;
        this.role = role_;
    }
}