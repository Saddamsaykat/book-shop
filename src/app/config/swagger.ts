import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
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
        url: "https://book-shop-seven-omega.vercel.app/api/v1",
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
  apis: [
    "./src/app/models/**/*.route.ts",
    "./src/app/models/**/*.routes.ts",
    "./src/app/models/**/*.route.js",
  ],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
