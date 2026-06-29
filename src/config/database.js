/**
 * ============================================================================
 * File Name    : database.js
 * Module       : Database Configuration
 * Description  : Establishes a connection to the MongoDB database using
 *                Mongoose. This module exports a single asynchronous function
 *                that is responsible for initializing the database connection
 *                when the application starts.
 *
 * Responsibilities:
 *  - Connect to MongoDB
 *  - Handle successful database connection
 *  - Handle database connection failures
 *  - Terminate the application if the database is unavailable
 *
 * Dependencies:
 *  - mongoose
 *  - env.js
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import mongoose from "mongoose";
import env from "./env.js";

/**
 * Establishes a connection to the MongoDB database.
 *
 * Workflow:
 * 1. Read the MongoDB connection string from the environment configuration.
 * 2. Connect to the MongoDB server using Mongoose.
 * 3. Display a success message if the connection is established.
 * 4. Display an error message and terminate the application if the
 *    connection fails.
 *
 * @async
 * @function connectDatabase
 * @returns {Promise<void>}
 */
const connectDatabase = async () => {

    try {

        // Connect to MongoDB
        await mongoose.connect(env.MONGO_URI);

        console.log("MongoDB Connected Successfully");

    } catch (error) {

        // Log connection failure details
        console.error("MongoDB Connection Failed");
        console.error(error.message);

        // Stop the application if the database connection cannot be established
        process.exit(1);

    }

};

// Export the database connection function
export default connectDatabase;