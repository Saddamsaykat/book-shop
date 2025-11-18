import { BookInterface } from "./book.interface";
import { Book } from "./book.model";

const createBookService = async (bookData: BookInterface) => {
  try {
    const book = await Book.create(bookData);
    return book;
  } catch (error) {
    return {
      success: false,
      error: "Failed to create book",
    };
  }
};

const getAllBooksService = async () => {
  try {
    const books = await Book.find({});
    return books;
  } catch (error) {
    return {
      success: false,
      error: "Failed to get books",
    };
  }
};

const getBookByIdService = async (id: string) => {
  try {
    const book = await Book.findById(id);
    return book;
  } catch (error) {
    return {
      success: false,
      error: "Failed to get book",
    };
  }
};

const updateBookByIdService = async (id: string, bookData: BookInterface) => {
  try {
    const book = await Book.findByIdAndUpdate(id, bookData, { new: true });
    return book;
  } catch (error) {
    return {
      success: false,
      error: "Failed to update book",
    };
  }
};

const deleteBookByIdService = async (id: string) => {
  try {
    const book = await Book.findByIdAndDelete(id);
    return book;
  } catch (error) {
    return {
      success: false,
      error: "Failed to delete book",
    };
  }
};

export const bookService = {
  createBookService,
  getAllBooksService,
  getBookByIdService,
  updateBookByIdService,
  deleteBookByIdService,
};
