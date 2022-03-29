import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import statusCode from '../utils/statusCode';

import JWT from '../utils/generateToken';

import service from '../services/order';

const { Created, OK } = statusCode.StatusCodes;

const create = async (req: Request, res: Response) => {
  const { authorization } = req.headers as JwtPayload;
  const { data } = JWT.verifyToken(authorization) as JwtPayload;
  const { id } = data;
  const { products } = req.body;
  
  const order = await service.create(id, products);
  
  return res.status(Created).json({ order });
};

const getAll = async (_req: Request, res: Response) => {
  const order = await service.getAll();
  
  return res.status(OK).json(order);
};

export default {
  create,
  getAll,
};