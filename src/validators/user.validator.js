/**
 * ============================================================================
 * File Name    : user.validator.js
 * Module       : User Validation
 * Description  : Defines Joi validation schemas for validating user-related
 *                requests before they are processed by the service layer.
 *
 * Responsibilities:
 *  - Validate user registration requests
 *  - Validate user login requests
 *  - Ensure incoming request data follows the expected format
 *  - Prevent invalid data from reaching the business logic
 *
 * Dependencies:
 *  - Joi
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import Joi from "joi";

/**
 * Validation schema for user registration.
 *
 * The schema validates:
 *  - First name
 *  - Last name
 *  - Email address
 *  - Password
 */
export const registerValidation = Joi.object({

    /**
     * User's first name.
     * Must contain between 2 and 50 characters.
     */
    firstName: Joi.string()
        .min(2)
        .max(50)
        .required(),

    /**
     * User's last name.
     * Must contain between 2 and 50 characters.
     */
    lastName: Joi.string()
        .min(2)
        .max(50)
        .required(),

    /**
     * User's email address.
     * Must follow a valid email format.
     */
    email: Joi.string()
        .email()
        .required(),

    /**
     * User's password.
     * Must contain at least 8 characters.
     */
    password: Joi.string()
        .min(8)
        .required()

});

/**
 * Validation schema for user login.
 *
 * The schema validates:
 *  - Email address
 *  - Password
 */
export const loginValidation = Joi.object({

    /**
     * User's email address.
     */
    email: Joi.string()
        .email()
        .required(),

    /**
     * User's password.
     */
    password: Joi.string()
        .required()

});