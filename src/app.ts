import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Hello World!",
    version: "1.0.0",
  });
});

export default app;
