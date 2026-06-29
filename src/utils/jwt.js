/**
 * ============================================================================
 * File Name    : jwt.js
 * Module       : JWT Utility
 * Description  : Provides utility functions for generating JSON Web Tokens
 *                (JWT) used for user authentication. The generated token
 *                contains user-specific information and is digitally signed
 *                using the application's secret key.
 *
 * Responsibilities:
 *  - Generate JWT access tokens
 *  - Include user identification information in the token payload
 *  - Configure token expiration
 *
 * Dependencies:
 *  - jsonwebtoken
 *  - env.js
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import jwt from "jsonwebtoken";
import env from "../config/env.js";

/**
 * Generates a JSON Web Token (JWT) for an authenticated user.
 *
 * The generated token contains the user's unique identifier
 * and role, which can be used by other services for
 * authentication and authorization.
 *
 * @param {string} userId - Unique identifier of the authenticated user.
 * @param {string} role - Role assigned to the authenticated user.
 * @returns {string} Signed JWT token.
 */
export const generateToken = (userId, role) => {

    // Generate and sign the JWT using the application's secret key
    return jwt.sign(
        {
            // JWT payload
            id: userId,
            role: role
        },
        // Secret key used to sign the token
        env.JWT_SECRET,
        {
            // Token expiration duration
            expiresIn: env.JWT_EXPIRES_IN
        }
    );

};