"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const book_service_1 = require("./book.service");
const createBookController = async (req, res) => {
    try {
        const book = await book_service_1.bookService.createBookService(req.body);
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
const getAllBooksController = async (req, res) => {
    try {
        const books = await book_service_1.bookService.getAllBooksService();
        res.status(200).json({
            status: true,
            message: "Books retrieved successfully",
            data: books,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to get books",
        });
    }
};
const getBookByIdController = async (req, res) => {
    try {
        const _id = req.params.id;
        const book = await book_service_1.bookService.getBookByIdService(_id);
        res.status(200).json({
            status: true,
            message: "Book retrieved successfully",
            data: book,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to get book",
        });
    }
};
const updateBookByIdController = async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedBookData = req.body;
        const book = await book_service_1.bookService.updateBookByIdService(_id, updatedBookData);
        res.status(200).json({
            status: true,
            message: "Book updated successfully",
            data: book,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to update book",
        });
    }
};
const deleteBookByIdController = async (req, res) => {
    try {
        const _id = req.params.id;
        const book = await book_service_1.bookService.deleteBookByIdService(_id);
        res.status(200).json({
            status: true,
            message: "Book deleted successfully",
            data: book,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to delete book",
        });
    }
};
exports.bookController = {
    createBookController,
    getAllBooksController,
    getBookByIdController,
    updateBookByIdController,
    deleteBookByIdController,
};
//# sourceMappingURL=book.controller.js.map