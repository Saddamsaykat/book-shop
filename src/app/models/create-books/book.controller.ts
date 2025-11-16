import { bookService } from "./book.service";
import { Request, Response } from "express";

const createBook = async (req: Request, res: Response) => {
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).json({
      success: true,
      message: "Book created successfullies",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to create book",
    });
  }
};

export const bookController = {
  createBook,
};
