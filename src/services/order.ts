import { Order } from '../interfaces/Order';
import { Product } from '../interfaces/Product';
import orderModel from '../models/Order';
import productModel from '../models/Product';

const create = async (id: number, products: number[]): Promise<Order> => {
  const order = await orderModel.create(id, products);  
  return order;
};

const generateProductOrder = (productsArray: Product[], orderId: number) => productsArray.map(
  (product) => {
    if (product.orderId === orderId) {
      return product.id;
    }
    return null;
  },
);

const getById = async (orderId: number) => {  
  const order = await orderModel.getById(orderId);
  const productsArray = await productModel.getAll();
  
  if (order === false) {
    return false;
  }

  const productOrders = {
    id: order.id,
    userId: order.userId,
    products: generateProductOrder(productsArray, order.id).filter((id) => id !== null),
  };

  return productOrders;
};

const getAll = async () => {  
  const orderArray = await orderModel.getAll();
  const productsArray = await productModel.getAll();

  const orders = orderArray.map((order) => {
    const newOrder = {
      id: order.id,
      userId: order.userId,
      products: generateProductOrder(productsArray, order.id).filter((id) => id !== null),
    };
    return newOrder;
  });

  return orders;
};

export default {
  create,
  getById,
  getAll,
};
