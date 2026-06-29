/**
 * ============================================================================
 * File Name    : user.repository.js
 * Module       : User Repository
 * Description  : Handles all database operations related to the User
 *                collection. This repository acts as the Data Access Layer
 *                (DAL) and isolates MongoDB queries from the business logic.
 *
 * Responsibilities:
 *  - Create a new user
 *  - Retrieve user information
 *  - Update user details
 *  - Delete user records
 *  - Interact directly with the User model
 *
 * Dependencies:
 *  - user.model.js
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import User from "../models/user.model.js";

/**
 * Repository class responsible for all database operations
 * related to the User collection.
 *
 * This layer communicates directly with MongoDB through
 * the Mongoose User model.
 */
class UserRepository {

    /**
     * Creates a new user document in the database.
     *
     * @param {Object} user - User data to be stored.
     * @returns {Promise<Object>} Newly created user document.
     */
    async create(user) {

        // Insert a new user document into MongoDB
        return await User.create(user);

    }

    /**
     * Finds a user using the email address.
     *
     * @param {string} email - User email address.
     * @returns {Promise<Object|null>} Matching user document or null.
     */
    async findByEmail(email) {

        // Retrieve a user document based on the email address
        return await User.findOne({ email });

    }

    /**
     * Finds a user using the MongoDB ObjectId.
     *
     * @param {string} id - User ID.
     * @returns {Promise<Object|null>} Matching user document or null.
     */
    async findById(id) {

        // Retrieve a user document by its unique identifier
        return await User.findById(id);

    }

    /**
     * Updates an existing user document.
     *
     * @param {string} id - User ID.
     * @param {Object} userData - Updated user information.
     * @returns {Promise<Object|null>} Updated user document.
     */
    async update(id, userData) {

        // Update the user document and return the modified document
        return await User.findByIdAndUpdate(
            id,
            userData,
            {
                new: true,
                runValidators: true
            }
        );

    }

    /**
     * Deletes a user document from the database.
     *
     * @param {string} id - User ID.
     * @returns {Promise<Object|null>} Deleted user document.
     */
    async delete(id) {

        // Remove the user document from MongoDB
        return await User.findByIdAndDelete(id);

    }

}

// Export a single repository instance
export default new UserRepository();