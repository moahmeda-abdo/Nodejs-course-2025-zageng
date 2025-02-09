const http = require("http"); // Import the built-in 'http' module

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header to indicate plain text content
    res.setHeader("Content-Type", "text/plain");

    // Handle different routes
    if (req.url === "/products") {
        return res.end("Products Page"); // Respond with 'Products Page'
    }

    if (req.url === "/users") {
        return res.end("Users Page"); // Respond with 'Users Page'
    }

    // Default response for undefined routes
    res.end("Welcome to our simple Node.js server!");
});

// Define the port number
const PORT = 4000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log a message when the server starts
});
