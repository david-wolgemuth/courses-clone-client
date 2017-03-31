
export class User {

    id: string;
    firstName: string;
    lastName: string;
    adminLevel: number;

    constructor(user: any) {

        this.id = user.id;
        this.firstName = user.first_name;
        this.lastName = user.last_name;
        this.adminLevel = user.admin_level;

    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }


}
