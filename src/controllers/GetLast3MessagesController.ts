import { Request, Response } from 'express';
import { GetLast3MessagesService } from '@services/GetLast3MessagesService';

class GetLast3MessagesController {
  public async store(request: Request, response: Response) {
    const getLast3MessagesService = new GetLast3MessagesService();

    const result = await getLast3MessagesService.getLast3Messages();

    return response.json(result);
  }
}

export { GetLast3MessagesController };
