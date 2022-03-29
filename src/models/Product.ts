import { ResultSetHeader } from 'mysql2';
import { InputProduct, Product } from '../interfaces/Product';
import connection from './connection';

const create = async ({ name, amount }: InputProduct): Promise<Product> => {
  const query = `
    INSERT INTO Trybesmith.Products (name, amount) 
    VALUES (?, ?)
  `;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  
  return { id, name, amount };
};

export default {
  create,
};