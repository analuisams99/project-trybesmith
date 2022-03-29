import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Order, ProductOrder } from '../interfaces/Order';
import connection from './connection';

const updateProduct = async (id: number, products: number[]) => {
  const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';

  products.forEach(async (product: number) => {    
    await connection.execute<ResultSetHeader>(query, [id, product]);
  });
};

const create = async (userId: number, products: number[]): Promise<Order> => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [userId]);
  
  await updateProduct(insertId, products);
  
  return {
    userId,
    products,
  };
};

const getAll = async (): Promise<ProductOrder[] | []> => {
  const queryOrders = 'SELECT * FROM Trybesmith.Orders';
  const [orders] = await connection.execute<RowDataPacket[]>(queryOrders);  
  const response = orders as ProductOrder[] | [];

  return response;
};

export default {
  create,
  getAll,
};