import mongoose = require("mongoose");
import { config } from "../src/app/config/index";
import app from "./app";

const runWithDB = async () => {
  await mongoose.connect(config.mongodbUrl);
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
};

runWithDB();
