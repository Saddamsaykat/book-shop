import { BookOrderInterface } from "./book.order.interface";
import { bookOrderService } from "./book.order.service";
import { Request, Response } from "express";

const postBookOrderController = async (req: Request, res: Response) => {
  const bookOrderData = req.body;

  try {
    const bookOrder = await bookOrderService.postBookOrderService(
      bookOrderData as BookOrderInterface
    );
    res.status(201).json({
      success: true,
      message: "Book order created successfully",
      data: bookOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to create book order",
    });
  }
};

const getAllBookOrdersController = async (req: Request, res: Response) => {
  try {
    const bookOrders = await bookOrderService.getAllBookOrdersService();
    res.status(200).json({
      success: true,
      message: "Book orders retrieved successfully",
      data: bookOrders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to get book orders",
    });
  }
};

export const bookOrderController = { postBookOrderController , getAllBookOrdersController };