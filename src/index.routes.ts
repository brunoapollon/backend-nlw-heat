import { Router } from 'express';

import { singInRouter } from './routes/signIn.routes';
import { authenticationRouter } from './routes/authentication.routes';

const routes = Router();

routes.use('/github', singInRouter);
routes.use('/authentication', authenticationRouter);

export { routes };
