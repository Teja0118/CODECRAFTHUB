/**
 * ============================================================================
 * File Name    : error.middleware.js
 * Module       : Global Error Handler
 * Description  : Handles all application errors in a centralized location.
 *                Any error passed using next(error) is intercepted by this
 *                middleware and converted into a standardized HTTP response.
 *
 * Responsibilities:
 *  - Capture application errors
 *  - Log error details
 *  - Return standardized JSON error responses
 *  - Prevent application crashes due to unhandled exceptions
 *
 * Dependencies:
 *  - Express Error Middleware
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

/**
 * Global Error Handling Middleware.
 *
 * This middleware is automatically invoked whenever an error is passed
 * to Express using next(error). It formats the error into a consistent
 * JSON response for the client.
 *
 * @param {Error} err - Error object.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
const errorHandler = (err, req, res, next) => {

    // Determine the appropriate HTTP status code
    const statusCode = err.statusCode || 500;

    // Log the complete error stack for debugging
    console.error(err.stack || err);

    // Return a standardized error response
    res.status(statusCode).json({

        success: false,

        message: err.message || "Internal Server Error"

    });

};

// Export the global error handler
export default errorHandler;