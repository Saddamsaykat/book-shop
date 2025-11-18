import { BookOrderInterface } from "./book.order.interface";
import { BookOrder } from "./book.order.model";

const postBookOrderService = async (bookOrderData: BookOrderInterface) => {
  try {
    const bookOrder = await BookOrder.create(bookOrderData);
    return bookOrder;
  } catch (error) {
    return {
      success: false,
      error: "Failed to create book order",
    };
  }
};

const getAllBookOrdersService = async () => {
  try {
    const bookOrders = await BookOrder.find({});
    return bookOrders;
  } catch (error) {
    return {
      success: false,
      error: "Failed to get book orders",
    };
  }
};

export const bookOrderService = { postBookOrderService , getAllBookOrdersService };
