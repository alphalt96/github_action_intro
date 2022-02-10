import { authService } from '../../core';
import { Request, Response } from 'express';

export async function registerUser(request: Request, response: Response) {
    const requestBody = request.body;
    const serviceResponse = await authService.registerUser(requestBody);

    console.log('Service response', serviceResponse)

    return response.status(200).json({
        message: "success1"
    })
}
