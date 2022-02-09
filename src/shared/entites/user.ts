export class User {
    constructor(
        readonly username: string,
        readonly password: string,
        readonly firstname: string,
        readonly lastname: string,
        readonly email: string
    ) {}
}

export type RegisterUserRequestBody = {
    username: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string
}
