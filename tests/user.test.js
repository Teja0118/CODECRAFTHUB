/**
 * ============================================================================
 * File Name    : user.test.js
 * Module       : User Service API Tests
 * Description  : Contains integration tests for the User Management Service
 *                using Jest and Supertest. These tests verify the behavior
 *                of the application's REST APIs by sending HTTP requests
 *                and validating the responses.
 *
 * Responsibilities:
 *  - Verify the health check endpoint
 *  - Verify user registration
 *  - Verify user login and JWT generation
 *  - Establish and close the database connection for testing
 *
 * Dependencies:
 *  - supertest
 *  - mongoose
 *  - app.js
 *  - database.js
 *
 * Author       : Your Name
 * Version      : 1.0.0
 * ============================================================================
 */

import request from "supertest";
import mongoose from "mongoose";

import app from "../src/app.js";
import connectDatabase from "../src/config/database.js";

/**
 * Establish a database connection before executing
 * the test suite.
 */
beforeAll(async () => {

    await connectDatabase();

});

/**
 * Close the database connection after all tests
 * have completed.
 */
afterAll(async () => {

    await mongoose.connection.close();

});

/**
 * User Service API Test Suite.
 *
 * This suite verifies the functionality of the
 * User Management Service endpoints.
 */
describe("User Service API Tests", () => {

    /**
     * Test the application's health check endpoint.
     *
     * Expected Result:
     * - HTTP Status : 200
     * - Service running message is returned.
     */
    it("should return service running message", async () => {

        // Send request to the application's root endpoint
        const response = await request(app)
            .get("/");

        // Verify HTTP status code
        expect(response.statusCode).toBe(200);

        // Verify success flag
        expect(response.body.success).toBe(true);

        // Verify response message
        expect(response.body.message).toBe(
            "User Service Running Successfully"
        );

    });

    /**
     * Test user registration.
     *
     * Expected Result:
     * - HTTP Status : 201
     * - User is successfully registered.
     */
    it("should register a new user", async () => {

        // Generate a unique email to avoid duplicate users
        const email = `john${Date.now()}@test.com`;

        // Send registration request
        const response = await request(app)
            .post("/api/users/register")
            .send({
                firstName: "John",
                lastName: "Doe",
                email,
                password: "Password123"
            });

        // Verify HTTP status code
        expect(response.statusCode).toBe(201);

        // Verify success flag
        expect(response.body.success).toBe(true);

        // Verify registered email
        expect(response.body.data.email).toBe(email);

    });

    /**
     * Test user authentication.
     *
     * Expected Result:
     * - HTTP Status : 200
     * - JWT token is generated after successful login.
     */
    it("should login successfully", async () => {

        // Generate a unique email for the login test
        const email = `login${Date.now()}@test.com`;

        // Register a user before attempting login
        await request(app)
            .post("/api/users/register")
            .send({
                firstName: "John",
                lastName: "Doe",
                email,
                password: "Password123"
            });

        // Send login request
        const response = await request(app)
            .post("/api/users/login")
            .send({
                email,
                password: "Password123"
            });

        // Verify HTTP status code
        expect(response.statusCode).toBe(200);

        // Verify success flag
        expect(response.body.success).toBe(true);

        // Verify JWT token generation
        expect(response.body.data.token).toBeDefined();

    });

});