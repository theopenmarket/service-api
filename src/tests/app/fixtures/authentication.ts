import request from 'supertest';
import { v4 } from 'uuid';

const getRandomEmail = () => v4() + '@gmail.com';
const DEFAULT_PASSWORD = 'password-123-*&^';

export const authenticatorFactory = (app) => {
  return {
    createUser: (user = {}) => {
      return request(app.callback())
        .post('/auth/signup')
        .send({
          ...{
            email: getRandomEmail(),
            password: DEFAULT_PASSWORD,
            firstName: 'firstName',
            lastName: 'lastName',
          },
          ...user,
        });
    },
    login: (user = {}) => {
      return request(app.callback())
        .post('/auth/signin')
        .send({
          ...{
            email: getRandomEmail(),
            password: DEFAULT_PASSWORD,
          },
          ...user,
        });
    },
  };
};
