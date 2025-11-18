import { bookService } from "./book.service";
import { Request, Response } from "express";

const createBookController = async (req: Request, res: Response) => {
  try {
    const book = await bookService.createBookService(req.body);
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

const getAllBooksController = async (req: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooksService();
    res.status(200).json({
      status: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to get books",
    });
  }
};

const getBookByIdController = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const book = await bookService.getBookByIdService(_id as string);
    res.status(200).json({
      status: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to get book",
    });
  }
};

const updateBookByIdController = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const updatedBookData = req.body;
    const book = await bookService.updateBookByIdService(
      _id as string,
      updatedBookData
    );
    res.status(200).json({
      status: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to update book",
    });
  }
};

const deleteBookByIdController = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const book = await bookService.deleteBookByIdService(_id as string);
    res.status(200).json({
      status: true,
      message: "Book deleted successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to delete book",
    });
  }
};

export const bookController = {
  createBookController,
  getAllBooksController,
  getBookByIdController,
  updateBookByIdController,
  deleteBookByIdController,
};
