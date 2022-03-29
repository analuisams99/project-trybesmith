import { Request, Response } from 'express';
import service from '../services/user';
// import generateToken from '../utils/generateToken';
import statusCode from '../utils/statusCode';

const { Created } = statusCode.StatusCodes;
// const { loginInvalid } = statusCode.errors;

const create = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const token = await service.create({ username, classe, level, password });

  return res.status(Created).json({ token });
};

export default {
  create,
};