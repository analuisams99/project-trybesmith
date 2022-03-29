import { Request, Response } from 'express';
import statusCode from '../utils/statusCode';

import service from '../services/product';

const { Created } = statusCode.StatusCodes;

const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const response = await service.create({ name, amount });
  
  return res.status(Created).json({ item: response });
};

export default {
  create,
};
