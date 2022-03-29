import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import statusCode from '../utils/statusCode';

import JWT from '../utils/generateToken';

import service from '../services/order';

const { orderNotFound } = statusCode.errors;
const { Created, OK } = statusCode.StatusCodes;

const create = async (req: Request, res: Response) => {
  const { authorization } = req.headers as JwtPayload;
  const { data } = JWT.verifyToken(authorization) as JwtPayload;
  const { id } = data;
  const { products } = req.body;
  
  const order = await service.create(id, products);
  
  return res.status(Created).json({ order });
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const order = await service.getById(+id);
  
  if (order === false) {
    const { code, error } = orderNotFound;
    return res.status(code).json({ error });
  }

  return res.status(OK).json(order);
};

const getAll = async (_req: Request, res: Response) => {
  const order = await service.getAll();
  
  return res.status(OK).json(order);
};

export default {
  create,
  getById,
  getAll,
};