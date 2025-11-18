export interface BookOrderInterface {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}
