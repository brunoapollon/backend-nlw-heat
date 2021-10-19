import 'dotenv/config';
import express from 'express';

import { routes } from './index.routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('server is running on port 3333');
});
