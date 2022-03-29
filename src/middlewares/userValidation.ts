import { NextFunction, Request, Response } from 'express';
import validationSchema from '../schemas/userSchema';
import { InputUser, Login } from '../interfaces/User';

const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  const user: InputUser = req.body;
  const response = await validationSchema.userValidation(user);

  if (response) {
    const { code, error } = response;
    return res.status(code).json({ error }); 
  }

  next();
};

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: Login = req.body;
  const response = await validationSchema.loginValidation({ username, password });

  if (response) {
    const { code, error } = response;
    return res.status(code).json({ error }); 
  }

  next();
};

export default {
  validateUser,
  validateLogin,
};