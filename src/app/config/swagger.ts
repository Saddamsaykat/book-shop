import swaggerJsdoc from 'swagger-jsdoc'

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Student Management API',
      version: '1.0.0',
      description: 'API documentation for Student Management System',
      contact: {
        name: 'API Support',
        email: 'support@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001/api/v1',
        description: 'Development server',
      },
      {
        url: 'https://student-management-system.onrender.com/api/v1',
        description: 'Production server',
      },
    ],
    components: {
      schemas: {
        Student: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Student ID',
            },
            name: {
              type: 'string',
              description: 'Student name',
            },
            email: {
              type: 'string',
              description: 'Student email',
            },
            // Add more fields based on your student model
          },
        },
      },
    },
  },
  apis: ['./src/app/modules/**/*.route.ts'], // Path to your route files
}

export const swaggerSpec = swaggerJsdoc(swaggerOptions)
