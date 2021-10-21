import { Router } from 'express';
import { ProfileUserController } from '@controllers/ProfileUserController';

const profileUserController = new ProfileUserController();

const userRouter = Router();

userRouter.get('/', profileUserController.show);

export { userRouter };
