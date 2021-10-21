import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';

import { Server } from 'socket.io';

import { routes } from './index.routes';

const app = express();

app.use(cors());

const SereverHttp = http.createServer(app);

const io = new Server(SereverHttp, {
  cors: {
    origin: '*',
  },
});

io.on('connection', socket => {
  console.log(`Usuário conectado no socket ${socket.id}`);
});

app.use(express.json());

app.use(routes);

export { SereverHttp, io };
