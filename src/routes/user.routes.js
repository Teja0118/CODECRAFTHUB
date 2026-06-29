/**
 * ============================================================================
 * File Name    : user.routes.js
 * Module       : User Routes
 * Description  : Defines all HTTP endpoints related to user management.
 *                Each route maps an incoming HTTP request to the appropriate
 *                controller method responsible for handling the request.
 *
 * Responsibilities:
 *  - Register API endpoints for the User Service
 *  - Route client requests to the User Controller
 *  - Define CRUD operations for user management
 *
 * Dependencies:
 *  - express
 *  - user.controller.js
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import express from "express";

import userController from "../controllers/user.controller.js";

// Create an Express router instance
const router = express.Router();

/**
 * ---------------------------------------------------------------------------
 * User Registration
 * ---------------------------------------------------------------------------
 * Endpoint : POST /api/users/register
 * Purpose  : Register a new user in the system.
 */
router.post(
    "/register",
    userController.register
);

/**
 * ---------------------------------------------------------------------------
 * User Login
 * ---------------------------------------------------------------------------
 * Endpoint : POST /api/users/login
 * Purpose  : Authenticate a user and generate a JWT token.
 */
router.post(
    "/login",
    userController.login
);

/**
 * ---------------------------------------------------------------------------
 * Get User by ID
 * ---------------------------------------------------------------------------
 * Endpoint : GET /api/users/:id
 * Purpose  : Retrieve user information using the unique user ID.
 */
router.get(
    "/:id",
    userController.getUserById
);

/**
 * ---------------------------------------------------------------------------
 * Update User
 * ---------------------------------------------------------------------------
 * Endpoint : PUT /api/users/:id
 * Purpose  : Update an existing user's information.
 */
router.put(
    "/:id",
    userController.updateUser
);

/**
 * ---------------------------------------------------------------------------
 * Delete User
 * ---------------------------------------------------------------------------
 * Endpoint : DELETE /api/users/:id
 * Purpose  : Delete an existing user from the system.
 */
router.delete(
    "/:id",
    userController.deleteUser
);

// Export router to be registered in app.js
export default router;