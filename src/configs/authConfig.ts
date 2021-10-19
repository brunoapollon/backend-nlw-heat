export default {
  jwt: {
    secret: process.env.SECRET_AUTH || '',
    expiresIn: '1d',
  },
};
