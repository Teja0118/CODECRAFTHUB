/**
 * ============================================================================
 * File Name    : password.js
 * Module       : Password Utility
 * Description  : Provides utility functions for securely hashing passwords
 *                and verifying user passwords using the bcrypt library.
 *
 * Responsibilities:
 *  - Hash plain text passwords before storing them
 *  - Compare entered passwords with stored hashed passwords
 *  - Centralize password-related operations
 *
 * Dependencies:
 *  - bcrypt
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import bcrypt from "bcrypt";

/**
 * Number of salt rounds used by bcrypt while hashing passwords.
 * A higher value increases security but also increases hashing time.
 */
const SALT_ROUNDS = 10;

/**
 * Hashes a plain text password using bcrypt.
 *
 * This function is used during user registration and whenever
 * a password is updated.
 *
 * @param {string} password - Plain text password.
 * @returns {Promise<string>} Hashed password.
 */
export const hashPassword = async (password) => {

    // Generate a secure hash for the password
    return await bcrypt.hash(password, SALT_ROUNDS);

};

/**
 * Compares a plain text password with its hashed version.
 *
 * This function is used during user authentication to verify
 * whether the entered password matches the stored password.
 *
 * @param {string} password - Plain text password entered by the user.
 * @param {string} hashedPassword - Hashed password stored in the database.
 * @returns {Promise<boolean>} Returns true if the passwords match; otherwise false.
 */
export const comparePassword = async (password, hashedPassword) => {

    // Compare the entered password with the stored hash
    return await bcrypt.compare(password, hashedPassword);

};