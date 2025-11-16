import { BookInterface } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (bookData: BookInterface) => {
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

export const bookService = {
  createBook,
};
