"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const index_1 = require("../src/app/config/index");
const app_1 = __importDefault(require("./app"));
const runWithDB = async () => {
    await mongoose.connect(index_1.config.mongodbUrl);
    app_1.default.listen(index_1.config.port, () => {
        console.log(`Server running on port ${index_1.config.port}`);
    });
};
runWithDB();
//# sourceMappingURL=server.js.map