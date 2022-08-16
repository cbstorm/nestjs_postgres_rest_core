export class CreateUserDto {
    constructor(createUserData: any) {
        this.firstName = createUserData.firstName;
        this.lastName = createUserData.lastName;
        this.password = createUserData.password;
        this.isActive = createUserData.isActive;
    }
    public firstName: string;
    public lastName: string;
    public password: string;
    public isActive: boolean;
}
