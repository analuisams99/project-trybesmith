import { Order } from '../interfaces/Order';
import orderModel from '../models/Order';

const create = async (id: number, products: number[]): Promise<Order> => {
  const order = await orderModel.create(id, products);  
  return order;
};

export default {
  create,
};
