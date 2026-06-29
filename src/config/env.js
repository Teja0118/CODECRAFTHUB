/**
 * ============================================================================
 * File Name    : env.js
 * Module       : Environment Configuration
 * Description  : Loads and exports application configuration from the
 *                environment variables defined in the .env file.
 *
 * Responsibilities:
 *  - Load environment variables using dotenv
 *  - Provide a centralized configuration object
 *  - Prevent direct use of process.env throughout the application
 *
 * Dependencies:
 *  - dotenv
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import dotenv from "dotenv";

// Load environment variables from the .env file into process.env
dotenv.config();

/**
 * Centralized configuration object.
 *
 * This object contains all environment variables required by the
 * application. Importing this object instead of directly accessing
 * process.env improves readability, maintainability, and consistency.
 */
const env = {

    // Server configuration
    PORT: process.env.PORT,

    // MongoDB connection string
    MONGO_URI: process.env.MONGO_URI,

    // JWT configuration
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN

};

// Export application configuration
export default env;