import { ResultSetHeader } from 'mysql2';
import { InputUser, User } from '../interfaces/User';
import connection from './connection';

const create = async ({ username, classe, level, password }: InputUser): Promise<User> => {
  const query = `
    INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)
  `;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    query, 
    [username, classe, level, password],
  );
  
  return { id: insertId, username, classe, level, password };
};

export default {
  create,
};