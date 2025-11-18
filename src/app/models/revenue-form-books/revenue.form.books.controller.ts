import { Request, Response } from "express";
import { revenueFormBookService } from "./revenue.form.books.service";

const getRevinueController = async (req: Request, res: Response) => {
  try {
    const totalRevenue =
      await revenueFormBookService.getAllOrderRevenue();

    return res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to calculate revenue",
      status: false,
    });
  }
};


export const revenueController = { getRevinueController };