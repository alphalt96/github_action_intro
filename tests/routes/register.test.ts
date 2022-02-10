import * as request from 'supertest';
import { app } from '../../src/app';

describe('Test api register user', () => {
    test('It should response the POST method', async () => {
        const response = await request(app).post('/register');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('success');
    });
});
