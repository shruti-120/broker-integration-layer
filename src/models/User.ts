export class User {
    userId: string;
    firstname: string;
    lastname: string;
    email: string;
    createdAt: EpochTimeStamp;

    constructor(userId: string, firstname: string, lastname: string, email: string) {
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.createdAt = Date.now();
    }

    requestTradeSync(): void {

    }
}