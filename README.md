# CODECRAFTHUB – User Management Service

## Project Overview

CODECRAFTHUB is a personalized online learning platform being developed using a microservices architecture.

This repository contains the **User Management Service**, which is responsible for managing user accounts and authentication.

The service is implemented using **Node.js**, **Express.js**, and **MongoDB**, following a layered architecture consisting of controllers, services, repositories, models, utilities, and validators.

---

# Current Implementation Status

The following features have been implemented:

* User Registration
* User Login with JWT Authentication
* Get User by ID
* Update User
* Delete User
* Request Validation using Joi
* Password Hashing using bcrypt
* JWT Token Generation
* Global Error Handling
* Integration Testing using Jest and Supertest
* Dockerized Deployment using Docker Compose
* MongoDB Persistence using Docker Volumes

---

# Technology Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)

### Validation

* Joi

### Password Encryption

* bcrypt

### Logging

* Morgan

### Security

* Helmet
* CORS

### Testing

* Jest
* Supertest

### Containerization

* Docker
* Docker Compose

---

# Project Structure

```
CODECRAFTHUB
│
├── src
│   ├── config
│   │   ├── database.js
│   │   └── env.js
│   │
│   ├── constants
│   │   └── roles.js
│   │
│   ├── controllers
│   │   └── user.controller.js
│   │
│   ├── exceptions
│   │   └── ApiError.js
│   │
│   ├── middleware
│   │   └── error.middleware.js
│   │
│   ├── models
│   │   └── user.model.js
│   │
│   ├── repositories
│   │   └── user.repository.js
│   │
│   ├── routes
│   │   └── user.routes.js
│   │
│   ├── services
│   │   └── user.service.js
│   │
│   ├── utils
│   │   ├── jwt.js
│   │   └── password.js
│   │
│   ├── validators
│   │   └── user.validator.js
│   │
│   ├── app.js
│   └── server.js
│
├── tests
│   └── user.test.js
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── .gitignore
└── .env
```

---

# Architecture

The project follows a layered architecture.

```
Client

↓

Routes

↓

Controllers

↓

Services

↓

Repositories

↓

MongoDB
```

### Layer Responsibilities

**Routes**

* Defines REST API endpoints.

**Controllers**

* Handles HTTP requests and responses.

**Services**

* Implements business logic.

**Repositories**

* Performs database operations.

**Models**

* Defines MongoDB document schemas.

**Utilities**

* Provides reusable helper functions.

**Validators**

* Validates incoming requests.

---

# REST API Endpoints

## Register User

```
POST /api/users/register
```

Registers a new user.

---

## Login

```
POST /api/users/login
```

Authenticates a user and returns a JWT token.

---

## Get User

```
GET /api/users/:id
```

Retrieves user details using the user ID.

---

## Update User

```
PUT /api/users/:id
```

Updates user information.

---

## Delete User

```
DELETE /api/users/:id
```

Deletes a user account.

---

# Running the Project

## Install Dependencies

```
npm install
```

---

## Start the Application

```
npm run dev
```

or

```
npm start
```

---

# Docker Deployment

Build the Docker image.

```
docker compose build
```

Start the application.

```
docker compose up
```

Run in detached mode.

```
docker compose up -d
```

Stop containers.

```
docker compose down
```

---

# Running Tests

Execute the integration test suite.

```
npm test
```

---

# Testing

The project includes integration tests using:

* Jest
* Supertest

The following APIs are tested:

* Health Check
* User Registration
* User Login

---

# Security Features

* Password hashing using bcrypt
* JWT-based authentication
* Request validation using Joi
* HTTP security headers using Helmet
* CORS enabled
* Centralized error handling

---

# Current Project Status

The User Management Service has been successfully completed with the following capabilities:

* CRUD operations for user management
* JWT-based user authentication
* Layered architecture
* Dockerized deployment
* MongoDB integration
* Automated API testing
* Comprehensive code documentation

This service forms the foundation of the CODECRAFTHUB microservices ecosystem.

---

# Future Enhancements

The following microservices are planned for future development:

* Course Management Service
* Learning Recommendation Service
* Interactive Coding Service
* Assessment Service
* Progress Tracking Service
* Notification Service
* API Gateway
* Service Discovery
* Analytics Service
