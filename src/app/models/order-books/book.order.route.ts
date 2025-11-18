import { Router } from "express";
import { bookOrderController } from "./book.order.controller";
import { revenueController } from "../revenue-form-books/revenue.form.books.controller";

const routerBookOrder = Router();

/**
 * @swagger
 * tags:
 *   name: Book Orders
 *   description: Book order management endpoints
 */


/**
 * @swagger
 * /create-book-order:
 *   post:
 *     summary: Create a new book order
 *     tags: [Book Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - product
 *               - quantity
 *               - totalPrice
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Customer email address
 *               product:
 *                 type: string
 *                 description: Product ID
 *               quantity:
 *                 type: number
 *                 description: Quantity of books to order
 *               totalPrice:
 *                 type: number
 *                 description: Total price of the order
 *           example:
 *             email: "customer@example.com"
 *             product: "648a45e5f0123c45678d9012"
 *             quantity: 2
 *             totalPrice: 30
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "648b45f5e1234b56789a6789"
 *                     email:
 *                       type: string
 *                       example: "customer@example.com"
 *                     product:
 *                       type: string
 *                       example: "648a45e5f0123c45678d9012"
 *                     quantity:
 *                       type: number
 *                       example: 2
 *                     totalPrice:
 *                       type: number
 *                       example: 30
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-19T12:00:00.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-19T12:00:00.000Z"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
routerBookOrder.post("/create-book-order", bookOrderController.postBookOrderController);


/**
 * @swagger
 * /get-all-book-orders:
 *   get:
 *     summary: Retrieve all book orders
 *     tags: [Book Orders]
 *     responses:
 *       200:
 *         description: Book orders retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookOrder'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
routerBookOrder.get("/get-all-book-orders", bookOrderController.getAllBookOrdersController);


export default routerBookOrder;