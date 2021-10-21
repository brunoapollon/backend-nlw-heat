import { Router } from 'express';

import { ensureAuthentication } from '@middlewares/ensureAuthentication';

import { singInRouter } from './routes/signIn.routes';
import { authenticationRouter } from './routes/authentication.routes';
import { messageRouter } from './routes/message.routes';
import { userRouter } from './routes/user.routes';

const routes = Router();

routes.use('/github', singInRouter);
routes.use('/authentication', authenticationRouter);
routes.use('/message', messageRouter);
routes.use('/user', ensureAuthentication, userRouter);

export { routes };
