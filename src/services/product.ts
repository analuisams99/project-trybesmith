import { InputProduct, Product } from '../interfaces/Product';
import model from '../models/Product';

const create = async ({ name, amount }: InputProduct): Promise<Product> => {
  const user = await model.create({ name, amount });
  return user;
};

export default {
  create,
};