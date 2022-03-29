import { Request, Response } from 'express';
import service from '../services/user';
import generateToken from '../utils/generateToken';
import statusCode from '../utils/statusCode';

const { Created, OK } = statusCode.StatusCodes;
const { loginInvalid } = statusCode.errors;

const create = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const token = await service.create({ username, classe, level, password });

  return res.status(Created).json({ token });
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await service.login({ username, password });

  if (!user || user.password !== password) {
    const { code, error } = loginInvalid;
    return res.status(code).json({ error });
  }

  const token = generateToken.createToken(user);

  return res.status(OK).json({ token });
};

export default {
  create,
  login,
};