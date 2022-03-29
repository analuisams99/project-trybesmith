import express from 'express';
import controllers from '../controllers/product';
import validation from '../middlewares/productValidation';

const { validateProduct } = validation;
const { create } = controllers;

const router = express.Router();

router
  .post('/', validateProduct, create);

export default router;
