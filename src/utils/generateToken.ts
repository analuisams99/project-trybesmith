import JWT, { SignOptions } from 'jsonwebtoken';

import { Token } from '../interfaces/Token';
import { Login } from '../interfaces/User';

require('dotenv/config');

const JWT_SECRET = 'bananas';

const tokenConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256', 
};

const createToken = (data: Token | Login) => {
  const token = JWT.sign({ data }, JWT_SECRET, tokenConfig);
  return token;
};

const verifyToken = (token: string) => {
  const user = JWT.verify(token, JWT_SECRET);
  return user;
};

export default {
  createToken,
  verifyToken,
};