import express from 'express';
import controllers from '../controllers/user';
import userValidation from '../middlewares/userValidation';

const { login } = controllers;
const { validateLogin } = userValidation;

const router = express.Router();

router
  .post('/', validateLogin, login);
  
export default router;