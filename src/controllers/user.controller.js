/**
 * ============================================================================
 * File Name    : user.controller.js
 * Module       : User Controller
 * Description  : Handles incoming HTTP requests related to user management.
 *                The controller acts as an intermediary between the client
 *                and the service layer by receiving requests, invoking the
 *                appropriate business logic, and returning HTTP responses.
 *
 * Responsibilities:
 *  - Handle user registration requests
 *  - Handle user login requests
 *  - Retrieve user information
 *  - Update user information
 *  - Delete user accounts
 *  - Forward errors to the global error handler
 *
 * Dependencies:
 *  - user.service.js
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import userService from "../services/user.service.js";

/**
 * Controller responsible for handling HTTP requests related to users.
 *
 * The controller does not contain business logic. Instead, it delegates
 * all business operations to the User Service and formats the HTTP response.
 */
class UserController {

    /**
     * Register a new user.
     *
     * Workflow:
     * 1. Receive registration request.
     * 2. Pass request data to the service layer.
     * 3. Return the created user information.
     *
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} next - Express error handler.
     */
    async register(req, res, next) {

        try {

            // Delegate user registration to the service layer
            const result = await userService.register(req.body);

            res.status(201).json({
                success: true,
                message: "User registered successfully",
                data: result
            });

        } catch (error) {

            // Pass the error to the global error handler
            next(error);

        }

    }

    /**
     * Authenticate a user.
     *
     * Workflow:
     * 1. Receive login credentials.
     * 2. Validate credentials through the service layer.
     * 3. Return a JWT token upon successful authentication.
     *
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} next - Express error handler.
     */
    async login(req, res, next) {

        try {

            // Authenticate user and generate JWT
            const result = await userService.login(req.body);

            res.status(200).json({
                success: true,
                message: "Login successful",
                data: result
            });

        } catch (error) {

            next(error);

        }

    }

    /**
     * Retrieve a user by ID.
     *
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} next - Express error handler.
     */
    async getUserById(req, res, next) {

        try {

            // Fetch user details from the service layer
            const result = await userService.getUserById(req.params.id);

            res.status(200).json({
                success: true,
                data: result
            });

        } catch (error) {

            next(error);

        }

    }

    /**
     * Update an existing user.
     *
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} next - Express error handler.
     */
    async updateUser(req, res, next) {

        try {

            // Update user details
            const result = await userService.updateUser(
                req.params.id,
                req.body
            );

            res.status(200).json({
                success: true,
                message: "User updated successfully",
                data: result
            });

        } catch (error) {

            next(error);

        }

    }

    /**
     * Delete a user.
     *
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} next - Express error handler.
     */
    async deleteUser(req, res, next) {

        try {

            // Delete the specified user
            const result = await userService.deleteUser(req.params.id);

            res.status(200).json({
                success: true,
                message: result.message
            });

        } catch (error) {

            next(error);

        }

    }

}

// Export a singleton instance of the controller
export default new UserController();