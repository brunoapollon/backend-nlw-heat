import { prismaClient } from '../prisma';

class GetLast3MessagesService {
  public async getLast3Messages() {
    const messgaes = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    });
    return messgaes;
  }
}

export { GetLast3MessagesService };
