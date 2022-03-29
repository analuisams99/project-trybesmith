import { NextFunction, Request, Response } from 'express';
import productSchema from '../schemas/productSchema';

const { productValidation } = productSchema;

const validateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  const response = await productValidation(product);

  if (response) {
    const { code, error } = response;
    return res.status(code).json({ error }); 
  }

  next();
};

export default {
  validateProduct,
};