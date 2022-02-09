import { RegisterUserRequestBody } from '../shared/entites/user';

export class AuthService {
    constructor(

    ) {}

    registerUser(requestBody: RegisterUserRequestBody) {
        console.log('Receive request body in service:', JSON.stringify(requestBody));
    }
}