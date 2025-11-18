import { BookOrder } from "../order-books/book.order.model";

const getAllOrderRevenue = async () => {
  try {
    const getAllBookOrders = await BookOrder.find({});
    const totalRevenue = getAllBookOrders.reduce(
      (total, order) => total + order.totalPrice,
      0
    );
    return totalRevenue;
  } catch (error) {
    throw new Error("Failed to calculate revenue");
  }
};

export const revenueFormBookService = {
  // getRevenue,
  getAllOrderRevenue,
};
