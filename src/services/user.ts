import { Token } from '../interfaces/Token';
import { InputUser, Login } from '../interfaces/User';
import model from '../models/User';
import generateToken from '../utils/generateToken';

const create = async ({ username, classe, level, password }: InputUser): Promise<string> => {
  const user = await model.create({ username, classe, level, password });
  const payload: Token = { id: user.id, username };
  const token = generateToken.createToken(payload);

  return token;
};

const login = async ({ username, password }: Login) => {
  const user: Login = await model.getUser({ username, password });
  return user;
};

export default {
  create,
  login,
};