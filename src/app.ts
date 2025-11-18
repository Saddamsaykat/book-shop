import express from "express";
import cors from "cors";
import routerBook from "./app/models/create-books/book.route";
import { swaggerSpec } from "./app/config/swagger";
import swaggerUi from "swagger-ui-express";
import routerBookOrder from "./app/models/order-books/book.order.route";
import reveniueRouter from "./app/models/revenue-form-books/revenue.form.books.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", routerBook);
app.use("/api/v1", routerBookOrder);
app.use("/api/v1", reveniueRouter);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Hello World!",
    version: "1.0.0",
  });
});

export default app;
