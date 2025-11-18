import { Schema, model } from "mongoose";
import { BookOrderInterface } from "./book.order.interface";

const bookOrderSchema = new Schema<BookOrderInterface>({
  email: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const BookOrder = model<BookOrderInterface>(
  "BookOrder",
  bookOrderSchema
);
