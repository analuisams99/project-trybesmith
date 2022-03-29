import { Token } from '../interfaces/Token';
import { InputUser } from '../interfaces/User';
import model from '../models/User';
import generateToken from '../utils/generateToken';

const create = async ({ username, classe, level, password }: InputUser): Promise<string> => {
  const user = await model.create({ username, classe, level, password });
  const payload: Token = { id: user.id, username };
  const token = generateToken.createToken(payload);

  return token;
};

export default {
  create,
};