import { request, Request, Response, Router } from 'express';

const singInRouter = Router();

singInRouter.get('/sign_in', (requesr: Request, response: Response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  );
});

singInRouter.get(
  '/sign_in/callback',
  (request: Request, response: Response) => {
    const { code } = request.query;

    return response.json(code);
  },
);

export { singInRouter };
