/**
 * ============================================================================
 * File Name    : ApiError.js
 * Module       : Custom API Exception
 * Description  : Defines a custom error class for handling application-specific
 *                errors. This class extends the built-in JavaScript Error
 *                object by including an HTTP status code that can be used by
 *                the global error handling middleware.
 *
 * Responsibilities:
 *  - Represent application-specific errors
 *  - Store an HTTP status code
 *  - Provide meaningful error information to the error handler
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

/**
 * Custom API Error.
 *
 * Extends the native JavaScript Error class by adding an HTTP status code.
 * This allows services to throw meaningful exceptions while enabling the
 * global error handler to return appropriate HTTP responses.
 */
class ApiError extends Error {

    /**
     * Creates a new API error.
     *
     * @param {number} statusCode - HTTP status code associated with the error.
     * @param {string} message - Description of the error.
     */
    constructor(statusCode, message) {

        // Initialize the parent Error class
        super(message);

        // Set a custom error name for easier debugging
        this.name = "ApiError";

        // Store the HTTP status code
        this.statusCode = statusCode;

    }

}

// Export the custom API error class
export default ApiError;