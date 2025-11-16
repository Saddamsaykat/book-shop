import { Router } from "express";
import { bookController } from "./book.controller";

const routerBook = Router();

routerBook.post("/create-book", bookController.createBook);

export default routerBook;
