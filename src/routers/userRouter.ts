import express from 'express';
import controllers from '../controllers/user';
import userValidation from '../middlewares/userValidation';

const { create } = controllers;
const { validateUser } = userValidation;

const router = express.Router();

router
  .post('/', validateUser, create);
  
export default router;