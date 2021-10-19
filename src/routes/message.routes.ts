import { CreateMessageController } from '@controllers/CreateMessageController';
import { Router } from 'express';

const messageRouter = Router();

const createMessageController = new CreateMessageController();

messageRouter.post('/', createMessageController.store);

export { messageRouter };
