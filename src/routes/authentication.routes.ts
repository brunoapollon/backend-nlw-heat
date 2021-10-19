import { AuthenticateUserController } from '@controllers/AuthenticateUserController';
import { Router } from 'express';

const authenticationRouter = Router();

const authenticateController = new AuthenticateUserController();

authenticationRouter.post('/', authenticateController.store);

export { authenticationRouter };
