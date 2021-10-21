import { SereverHttp } from './app';

SereverHttp.listen(3333, () => {
  console.log('server is running on port 3333');
});
