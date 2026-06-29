/**
 * ============================================================================
 * File Name    : user.model.js
 * Module       : User Model
 * Description  : Defines the MongoDB schema and model for storing user
 *                information. The schema represents the structure of the
 *                User collection and enforces validation rules for user data.
 *
 * Responsibilities:
 *  - Define the user document structure
 *  - Apply schema-level validation
 *  - Define default values
 *  - Create the User model
 *
 * Dependencies:
 *  - mongoose
 *  - roles.js
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import mongoose from "mongoose";
import ROLES from "../constants/roles.js";

/**
 * User Schema
 *
 * Defines the structure of documents stored in the User collection.
 */
const userSchema = new mongoose.Schema(

    {

        /**
         * User's first name.
         */
        firstName: {

            type: String,

            required: true,

            trim: true,

            minlength: 2

        },

        /**
         * User's last name.
         */
        lastName: {

            type: String,

            required: true,

            trim: true,

            minlength: 2

        },

        /**
         * User's unique email address.
         *
         * Stored in lowercase to prevent duplicate emails
         * with different letter casing.
         */
        email: {

            type: String,

            required: true,

            unique: true,

            lowercase: true,

            trim: true

        },

        /**
         * Hashed password.
         *
         * Passwords are encrypted using bcrypt before
         * being stored in the database.
         */
        password: {

            type: String,

            required: true

        },

        /**
         * User role.
         *
         * Defaults to LEARNER.
         */
        role: {

            type: String,

            enum: Object.values(ROLES),

            default: ROLES.LEARNER

        },

        /**
         * Indicates whether the user account is active.
         */
        isActive: {

            type: Boolean,

            default: true

        }

    },

    {

        /**
         * Automatically creates:
         * - createdAt
         * - updatedAt
         */
        timestamps: true

    }

);

/**
 * User Model
 *
 * Represents the User collection in MongoDB.
 */
const User = mongoose.model("User", userSchema);

// Export the User model
export default User;