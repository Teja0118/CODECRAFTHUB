/**
 * ============================================================================
 * File Name    : server.js
 * Module       : Application Entry Point
 * Description  : Serves as the entry point of the User Management Service.
 *                It initializes the database connection and starts the
 *                Express server on the configured port.
 *
 * Responsibilities:
 *  - Establish MongoDB database connection
 *  - Start the Express server
 *  - Initialize the application
 *
 * Dependencies:
 *  - app.js
 *  - database.js
 *  - env.js
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import app from "./app.js";
import connectDatabase from "./config/database.js";
import env from "./config/env.js";

/**
 * Initializes the User Management Service.
 *
 * Workflow:
 * 1. Establish a connection to the MongoDB database.
 * 2. Start the Express server.
 * 3. Listen for incoming client requests on the configured port.
 */
const startServer = async () => {

    // Establish connection with the MongoDB database
    await connectDatabase();

    // Start the Express application
    app.listen(env.PORT, () => {

        console.log(`Server running on port ${env.PORT}`);

    });

};

// Start the application
startServer();