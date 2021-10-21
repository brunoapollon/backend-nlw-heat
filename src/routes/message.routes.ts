import { CreateMessageController } from '@controllers/CreateMessageController';
import { GetLast3MessagesController } from '@controllers/GetLast3MessagesController';
import { ensureAuthentication } from '@middlewares/ensureAuthentication';
import { Router } from 'express';

const messageRouter = Router();

const createMessageController = new CreateMessageController();
const getLast3MessagesController = new GetLast3MessagesController();

messageRouter.post('/', ensureAuthentication, createMessageController.store);
messageRouter.get('/last3', getLast3MessagesController.store);

export { messageRouter };
