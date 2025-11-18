import { Router } from "express";
import { revenueController } from "./revenue.form.books.controller";

const reveniueRouter = Router();

/**
 * @swagger
 * /revenue-form-book:
 *   get:
 *     summary: Get total revenue from all book orders
 *     description: Calculates and returns the total revenue generated from all book orders in the system.
 *     tags:
 *       - Book Orders Revenue
 *     responses:
 *       200:
 *         description: Revenue calculated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Revenue calculated successfully
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalRevenue:
 *                       type: number
 *                       description: Total revenue calculated from all orders
 *                       example: 450
 *       500:
 *         description: Failed to calculate revenue
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to calculate revenue
 *                 status:
 *                   type: boolean
 *                   example: false
 */
reveniueRouter.get(
  "/revenue-form-book",
  revenueController.getRevinueController
);

export default reveniueRouter;
