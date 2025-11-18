"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const book_service_1 = require("./book.service");
const createBook = async (req, res) => {
    try {
        const book = await book_service_1.bookService.createBook(req.body);
        res.status(201).json({
            success: true,
            message: "Book created successfullies",
            data: book,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to create book",
        });
    }
};
exports.bookController = {
    createBook,
};
//# sourceMappingURL=book.controller.js.map