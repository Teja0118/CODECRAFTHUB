/**
 * ============================================================================
 * File Name    : roles.js
 * Module       : User Roles
 * Description  : Defines the roles available within the application.
 *                These constants are used throughout the User Service to
 *                maintain consistency and avoid hardcoded string values.
 *
 * Responsibilities:
 *  - Store all supported user roles
 *  - Provide a single source of truth for role values
 *  - Improve maintainability and readability
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

/**
 * Application user roles.
 *
 * ADMIN      - Platform administrator with full access.
 * INSTRUCTOR - User responsible for creating and managing learning content.
 * LEARNER    - Default role assigned to users who consume learning content.
 */
const ROLES = {

    ADMIN: "ADMIN",

    INSTRUCTOR: "INSTRUCTOR",

    LEARNER: "LEARNER"

};

// Export role constants
export default ROLES;