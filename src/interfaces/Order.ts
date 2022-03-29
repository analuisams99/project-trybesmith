export interface InputOrder {
  id: number,
  userId: number,
}

export interface Order {
  userId: number,
  products: number[],
}