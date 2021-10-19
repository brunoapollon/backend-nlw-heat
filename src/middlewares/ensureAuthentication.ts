import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@configs/authConfig';

interface IPayload {
  sub: string;
}

export function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) return response.status(401).end;

  const [, token] = authToken.split(' ');
  try {
    const { sub } = verify(token, authConfig.jwt.secret) as IPayload;
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
