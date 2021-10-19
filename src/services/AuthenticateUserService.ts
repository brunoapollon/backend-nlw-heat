import axios from 'axios';
import { sign } from 'jsonwebtoken';
import { prismaClient } from '../prisma';

import authConfig from '@configs/authConfig';

interface IResquest {
  code: string;
}

interface IAccessTokenReturn {
  access_token: string;
}

interface IDataUser {
  name: string;
  avatar_url: string;
  login: string;
  id: number;
}

class AuthenticateUserService {
  public async authWithGithub({ code }: IResquest) {
    const url = 'https://github.com/login/oauth/access_token';

    const { data } = await axios.post<IAccessTokenReturn>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    });
    const { access_token } = data;

    const { data: dataUser } = await axios.get<IDataUser>(
      'https://api.github.com/user',
      {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      },
    );

    const { avatar_url, id, login, name } = dataUser;

    let user = await prismaClient.user.findFirst({
      where: { github_id: id },
    });

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          name,
          github_id: id,
          avatar_url,
          login,
        },
      });
    }

    const token = sign(
      {
        user: {
          name: user.name,
          avatar_url: avatar_url,
          id: user.id,
        },
      },
      authConfig.jwt.secret,
      {
        subject: user.id,
        expiresIn: authConfig.jwt.expiresIn,
      },
    );

    return { token, user };
  }
}

export { AuthenticateUserService };
