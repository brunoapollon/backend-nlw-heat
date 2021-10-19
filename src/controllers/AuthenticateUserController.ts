import { Request, Response } from 'express';
import { AuthenticateUserService } from '@services/AuthenticateUserService';

class AuthenticateUserController {
  public async store(request: Request, response: Response) {
    const { code } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const result = await authenticateUserService.authWithGithub({ code });

    return response.json(result);
  }
}

export { AuthenticateUserController };
