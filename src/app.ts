import express from "express";
import cors from "cors";
import routerBook from "./app/models/create-books/book.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", routerBook);

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Hello World!",
    version: "1.0.0",
  });
});

export default app;
