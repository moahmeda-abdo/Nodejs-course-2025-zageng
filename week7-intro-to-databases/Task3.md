# Node.js Task: Authentication Middleware In Book Management

# Node.js Task: Authentication Middleware

## Task Description

Implement an authentication middleware for an existing Node.js application. This middleware should:

### 1. Authenticate User Token

* Extract the token from the `Authorization` header.
* Verify the token using `jsonwebtoken`.
* If the token is valid, decode it and attach the user data to `req.user`.
* If the token is missing or invalid, return a `401 Unauthorized` response.

### 2. Apply Middleware to Routes

* Ensure that the middleware is applied to protected routes such as book management endpoints (`POST /books`, `GET /books`).
* If a request is made without a valid token, the middleware should prevent access.

## Technical Requirements

* Use Express.js for handling middleware.
* Use JWT (`jsonwebtoken`) for token authentication.
* Ensure proper error handling and response statuses.

## Steps to Complete the Task

1. **Install Dependencies**

   * Ensure `jsonwebtoken` is installed (`npm install jsonwebtoken`).
   * If using environment variables, install `dotenv` (`npm install dotenv`).
2. **Create the Authentication Middleware**

   * Extract the token from the request headers.
   * Verify the token and decode the user information.
   * Attach the user object to `req.user`.
   * Handle errors properly and return appropriate HTTP responses.
3. **Test the Middleware**

   * Send requests with valid and invalid tokens to verify authentication.
   * Ensure that protected routes are accessible only with a valid token.
