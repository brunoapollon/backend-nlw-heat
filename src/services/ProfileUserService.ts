import { prismaClient } from '../prisma';

interface IResquest {
  user_id: string;
}

class ProfileUseService {
  public async profileUser({ user_id }: IResquest) {
    const user = await prismaClient.user.findFirst({
      where: { id: user_id },
    });

    return user;
  }
}

export { ProfileUseService };
