import express from 'express';
import controllers from '../controllers/order';
import validateToken from '../middlewares/tokenValidation';
import validation from '../middlewares/productValidation';

const { validateProductsOrder } = validation;

const { create, getById, getAll } = controllers;

const router = express.Router();

router
  .post('/', validateToken, validateProductsOrder, create)
  .get('/:id', validateToken, getById)
  .get('/', getAll);
  
export default router;