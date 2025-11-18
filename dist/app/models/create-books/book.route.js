"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = require("./book.controller");
const routerBook = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management endpoints
 */
/**
 * @swagger
 * /create-book:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *           example:
 *             title: "The Great Gatsby"
 *             author: "F. Scott Fitzgerald"
 *             price: 12.99
 *             category: "Fiction"
 *             description: "A classic American novel"
 *             quantity: 50
 *             inStock: true
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Book created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
routerBook.post("/create-book", book_controller_1.bookController.createBook);
exports.default = routerBook;
//# sourceMappingURL=book.route.js.map