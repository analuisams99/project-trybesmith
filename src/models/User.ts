import { ResultSetHeader } from 'mysql2';
import { InputUser, Login, User } from '../interfaces/User';
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

const getUser = async ({ username, password }: Login) => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const [rows] = await connection.execute(query, [username, password]);
  const [user] = rows as User[];
  
  return user;
};

export default {
  create,
  getUser,
};