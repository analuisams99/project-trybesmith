import { NextFunction, Request, Response } from 'express';
import generateToken from '../utils/generateToken';
import statusCode from '../utils/statusCode';

const { tokenNotFound, tokenInvalid } = statusCode.errors;

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    const { code, error } = tokenNotFound;
    return res.status(code).json({ error });
  } 

  try {
    generateToken.verifyToken(token);
  } catch (e) {
    const { code, error } = tokenInvalid;
    return res.status(code).json({ error }); 
  }

  next();
};

export default validateToken;