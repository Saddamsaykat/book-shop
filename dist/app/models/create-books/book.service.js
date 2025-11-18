"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const book_model_1 = require("./book.model");
const createBook = async (bookData) => {
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
exports.bookService = {
    createBook,
};
//# sourceMappingURL=book.service.js.map