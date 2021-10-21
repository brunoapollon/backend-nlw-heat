import { Request, Response } from 'express';
import { ProfileUseService } from '@services/ProfileUserService';

class ProfileUserController {
  public async show(request: Request, response: Response) {
    const { user_id } = request;

    const profileUseService = new ProfileUseService();

    const user = await profileUseService.profileUser({ user_id });

    return response.json(user);
  }
}

export { ProfileUserController };
