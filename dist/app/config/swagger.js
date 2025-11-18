"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Book Management API",
            version: "1.0.0",
            description: "API documentation for Book Management System",
            contact: {
                name: "API Support",
                email: "support@example.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3001/api/v1",
                description: "Development server",
            },
            {
                url: "https://student-management-system.onrender.com/api/v1",
                description: "Production server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    // Fix the path pattern - use correct glob pattern
    apis: ["./src/app/models/**/*.route.ts", "./src/app/models/**/*.route.js"],
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
//# sourceMappingURL=swagger.js.map