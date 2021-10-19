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
    return message;
  }
}

export { CreateMessageService };
