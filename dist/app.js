"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const book_route_1 = __importDefault(require("./app/models/create-books/book.route"));
const swagger_1 = require("./app/config/swagger");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const book_order_route_1 = __importDefault(require("./app/models/order-books/book.order.route"));
const revenue_form_books_routes_1 = __importDefault(require("./app/models/revenue-form-books/revenue.form.books.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1", book_route_1.default);
app.use("/api/v1", book_order_route_1.default);
app.use("/api/v1", revenue_form_books_routes_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
app.get("/", (req, res) => {
    res.send({
        success: true,
        message: "Hello World!",
        version: "1.0.0",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map