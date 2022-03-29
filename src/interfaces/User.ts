export interface InputUser {
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface User extends InputUser {
  id: number,
}

export interface Login {
  id?: number;
  username: string,
  password: string,
}