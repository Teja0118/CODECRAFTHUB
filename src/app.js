/**
 * ============================================================================
 * File Name    : app.js
 * Module       : Express Application
 * Description  : Configures the Express application by registering middleware,
 *                defining application routes, and configuring global error
 *                handling. This file is responsible for creating and exporting
 *                the Express application instance.
 *
 * Responsibilities:
 *  - Create the Express application
 *  - Register application middleware
 *  - Configure API routes
 *  - Configure global error handling
 *  - Export the configured Express application
 *
 * Dependencies:
 *  - express
 *  - cors
 *  - helmet
 *  - morgan
 *  - user.routes.js
 *  - error.middleware.js
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import userRoutes from "./routes/user.routes.js";
import errorHandler from "./middleware/error.middleware.js";

// Create an Express application instance
const app = express();

/**
 * ---------------------------------------------------------------------------
 * Register Global Middleware
 * ---------------------------------------------------------------------------
 */

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Add common HTTP security headers
app.use(helmet());

// Parse incoming JSON request bodies
app.use(express.json());

// Log incoming HTTP requests
app.use(morgan("dev"));

/**
 * ---------------------------------------------------------------------------
 * Health Check Endpoint
 * ---------------------------------------------------------------------------
 * Endpoint : GET /
 * Purpose  : Verify that the User Service is running successfully.
 */
app.get("/", (req, res) => {

    res.json({

        success: true,

        message: "User Service Running Successfully"

    });

});

/**
 * ---------------------------------------------------------------------------
 * User Routes
 * ---------------------------------------------------------------------------
 * Base Path : /api/users
 * Purpose   : Register all user-related API endpoints.
 */
app.use("/api/users", userRoutes);

/**
 * ---------------------------------------------------------------------------
 * Global Error Handling Middleware
 * ---------------------------------------------------------------------------
 * This middleware should always be registered after all routes
 * to ensure that any unhandled errors are processed correctly.
 */
app.use(errorHandler);

// Export the configured Express application
export default app;