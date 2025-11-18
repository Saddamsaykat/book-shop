import { Router } from "express";
import { bookController } from "./book.controller";

const routerBook = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - price
 *         - category
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book
 *         price:
 *           type: number
 *           description: The price of the book
 *         category:
 *           type: string
 *           description: The category of the book
 *         description:
 *           type: string
 *           description: The description of the book
 *         quantity:
 *           type: number
 *           description: The quantity in stock
 *         inStock:
 *           type: boolean
 *           description: Whether the book is in stock
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *     Error:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: An error occurred
 *         error:
 *           type: string
 *           example: Error details
 */


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
routerBook.post("/create-book", bookController.createBookController);

/**
 * @swagger
 * /get-all-books:
 *   get:
 *     summary: Retrieve all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Books retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Books retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       author:
 *                         type: string
 *                       price:
 *                         type: number
 *                       category:
 *                         type: string
 *                       description:
 *                         type: string
 *                       quantity:
 *                         type: number
 *                       inStock:
 *                         type: boolean
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 * 
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 
 */
routerBook.get("/get-all-books", bookController.getAllBooksController);


/**
 * @swagger
 * /get-book-by-id/{id}:
 *   get:
 *     summary: Retrieve a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the book to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Book retrieved successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal server error
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
routerBook.get("/get-book-by-id/:id", bookController.getBookByIdController);

/**
 * @swagger
 * /update-book-by-id/{id}:
 *   put:
 *     summary: Update a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the book to update
 *         schema:
 *           type: string
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
 *       200:
 *         description: Book updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Book updated successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
routerBook.put("/update-book-by-id/:id", bookController.updateBookByIdController);

/**
 * @swagger
 * /delete-book-by-id/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the book to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Book deleted successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
routerBook.delete("/delete-book-by-id/:id", bookController.deleteBookByIdController);

export default routerBook;
