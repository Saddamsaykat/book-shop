"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const book_model_1 = require("./book.model");
const createBookService = async (bookData) => {
    try {
        const book = await book_model_1.Book.create(bookData);
        return book;
    }
    catch (error) {
        return {
            success: false,
            error: "Failed to create book",
        };
    }
};
const getAllBooksService = async () => {
    try {
        const books = await book_model_1.Book.find({});
        return books;
    }
    catch (error) {
        return {
            success: false,
            error: "Failed to get books",
        };
    }
};
const getBookByIdService = async (id) => {
    try {
        const book = await book_model_1.Book.findById(id);
        return book;
    }
    catch (error) {
        return {
            success: false,
            error: "Failed to get book",
        };
    }
};
const updateBookByIdService = async (id, bookData) => {
    try {
        const book = await book_model_1.Book.findByIdAndUpdate(id, bookData, { new: true });
        return book;
    }
    catch (error) {
        return {
            success: false,
            error: "Failed to update book",
        };
    }
};
const deleteBookByIdService = async (id) => {
    try {
        const book = await book_model_1.Book.findByIdAndDelete(id);
        return book;
    }
    catch (error) {
        return {
            success: false,
            error: "Failed to delete book",
        };
    }
};
exports.bookService = {
    createBookService,
    getAllBooksService,
    getBookByIdService,
    updateBookByIdService,
    deleteBookByIdService,
};
//# sourceMappingURL=book.service.js.map