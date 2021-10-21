import { io } from 'src/app';
import { prismaClient } from '../prisma';

interface IResquest {
  text: string;
  user_id: string;
}

class CreateMessageService {
  public async createMessage({ text, user_id }: IResquest) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

    const infosWebSocket = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    };

    io.emit('new_messgae', infosWebSocket);

    return message;
  }
}

export { CreateMessageService };
