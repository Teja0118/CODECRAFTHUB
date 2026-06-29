/**
 * ============================================================================
 * File Name    : user.service.js
 * Module       : User Service
 * Description  : Implements the business logic for all user-related
 *                operations. This service validates requests, performs
 *                business rules, interacts with the repository layer,
 *                encrypts passwords, generates JWT tokens, and returns
 *                processed data to the controller.
 *
 * Responsibilities:
 *  - Register new users
 *  - Authenticate users
 *  - Retrieve user details
 *  - Update user information
 *  - Delete user accounts
 *
 * Dependencies:
 *  - user.repository.js
 *  - ApiError.js
 *  - user.validator.js
 *  - password.js
 *  - jwt.js
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import userRepository from "../repositories/user.repository.js";
import ApiError from "../exceptions/ApiError.js";

import {
    registerValidation,
    loginValidation
} from "../validators/user.validator.js";

import {
    hashPassword,
    comparePassword
} from "../utils/password.js";

import {
    generateToken
} from "../utils/jwt.js";

/**
 * Service class responsible for implementing the business
 * logic related to user management.
 */
class UserService {

    /**
     * Registers a new user.
     *
     * Workflow:
     * 1. Validate the incoming request.
     * 2. Check whether the email already exists.
     * 3. Encrypt the user's password.
     * 4. Store the user in the database.
     * 5. Return the newly created user details.
     *
     * @param {Object} userData - User registration data.
     * @returns {Promise<Object>} Registered user information.
     */
    async register(userData) {

        // Validate the registration request
        const { error } = registerValidation.validate(userData);

        if (error) {
            throw new ApiError(400, error.details[0].message);
        }

        // Check whether the email is already registered
        const existingUser = await userRepository.findByEmail(userData.email);

        if (existingUser) {
            throw new ApiError(409, "Email already exists");
        }

        // Encrypt the user's password before storing it
        userData.password = await hashPassword(userData.password);

        // Save the user to the database
        const user = await userRepository.create(userData);

        // Return user details (excluding password)
        return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role
        };

    }

    /**
     * Authenticates a user.
     *
     * Workflow:
     * 1. Validate login credentials.
     * 2. Verify that the user exists.
     * 3. Compare the entered password with the stored password.
     * 4. Generate a JWT token.
     * 5. Return the token and user information.
     *
     * @param {Object} loginData - User login credentials.
     * @returns {Promise<Object>} JWT token and user information.
     */
    async login(loginData) {

        // Validate login request
        const { error } = loginValidation.validate(loginData);

        if (error) {
            throw new ApiError(400, error.details[0].message);
        }

        // Retrieve the user by email
        const user = await userRepository.findByEmail(loginData.email);

        if (!user) {
            throw new ApiError(401, "Invalid Email or Password");
        }

        // Verify the user's password
        const passwordMatched = await comparePassword(
            loginData.password,
            user.password
        );

        if (!passwordMatched) {
            throw new ApiError(401, "Invalid Email or Password");
        }

        // Generate JWT token after successful authentication
        const token = generateToken(user._id, user.role);

        // Return token and user information
        return {

            token,

            user: {

                id: user._id,

                firstName: user.firstName,

                lastName: user.lastName,

                email: user.email,

                role: user.role

            }

        };

    }

    /**
     * Retrieves a user by ID.
     *
     * @param {string} id - User ID.
     * @returns {Promise<Object>} User information.
     */
    async getUserById(id) {

        // Retrieve user from the database
        const user = await userRepository.findById(id);

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        // Return user details
        return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            isActive: user.isActive
        };

    }

    /**
     * Updates an existing user's information.
     *
     * @param {string} id - User ID.
     * @param {Object} userData - Updated user information.
     * @returns {Promise<Object>} Updated user details.
     */
    async updateUser(id, userData) {

        // Verify that the user exists
        const user = await userRepository.findById(id);

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        // Encrypt the password if it is being updated
        if (userData.password) {
            userData.password = await hashPassword(userData.password);
        }

        // Update the user information
        const updatedUser = await userRepository.update(id, userData);

        // Return updated user details
        return {
            id: updatedUser._id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            role: updatedUser.role,
            isActive: updatedUser.isActive
        };

    }

    /**
     * Deletes a user from the database.
     *
     * @param {string} id - User ID.
     * @returns {Promise<Object>} Deletion status.
     */
    async deleteUser(id) {

        // Verify that the user exists
        const user = await userRepository.findById(id);

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        // Delete the user
        await userRepository.delete(id);

        // Return confirmation message
        return {
            message: "User deleted successfully"
        };

    }

}

// Export a singleton instance of the User Service
export default new UserService();