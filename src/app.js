require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const initServer = require('./config/server');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');
const app = initServer();
connectDB();
app.use('/api/users', userRoutes);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// .env
MONGO_URI=mongodb://root:<mongo_password>@<mongo_host>:27017/usermngtservice?authSource=admin
PORT=5000
    
// package.json
{
  "name": "user-management-service",
  "version": "1.0.0",
  "description": "A Node.js service for managing users with authentication and authorization.",
  "main": "src/app.js",
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js",
    "test": "jest --coverage"
  },
  "keywords": [
    "node",
    "express",
    "user",
    "authentication",
    "api"
  ],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.6.1",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.3.1",
    "morgan": "^1.10.0",
    "winston": "^3.17.0"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "nodemon": "^3.1.4",
    "supertest": "^6.3.4"
  }
}
