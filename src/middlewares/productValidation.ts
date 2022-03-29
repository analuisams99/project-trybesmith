import { NextFunction, Request, Response } from 'express';
import productSchema from '../schemas/productSchema';

const { productValidation, productsOrderValidation } = productSchema;

const validateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  const response = await productValidation(product);

  if (response) {
    const { code, error } = response;
    return res.status(code).json({ error }); 
  }

  next();
};

const validateProductsOrder = async (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  const response = await productsOrderValidation(products);

  if (response) {
    const { code, error } = response;
    return res.status(code).json({ error }); 
  }

  next();
};

export default {
  validateProduct,
  validateProductsOrder,
};