// Load the express module to create a web application

const express = require("express");

const app = express();

const cors = require("cors");

// app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

/* ************************************************************************* */

// Request Parsing: Understanding the purpose of this part

// Request parsing is necessary to extract data sent by the client in an HTTP request.
// For example to access the body of a POST request.
// The current code contains different parsing options as comments to demonstrate different ways of extracting data.

// 1. `express.json()`: Parses requests with JSON data.
// 2. `express.urlencoded()`: Parses requests with URL-encoded data.
// 3. `express.text()`: Parses requests with raw text data.
// 4. `express.raw()`: Parses requests with raw binary data.

// Uncomment one or more of these options depending on the format of the data sent by your client:

app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.text());
// app.use(express.raw());

/* ************************************************************************* */

// Cookies: Why and how to use the `cookie-parser` module?

// Cookies are small pieces of data stored in the client's browser. They are often used to store user-specific information or session data.

// The `cookie-parser` module allows us to parse and manage cookies in our Express application. It parses the `Cookie` header in incoming requests and populates `req.cookies` with an object containing the cookies.

// To use `cookie-parser`, make sure it is installed in `backend/package.json` (you may need to install it separately):
// npm install cookie-parser

// Then, require the module and use it as middleware in your Express application:

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

// Once `cookie-parser` is set up, you can read and set cookies in your routes.
// For example, to set a cookie named "username" with the value "john":
// res.cookie("username", "john");

// To read the value of a cookie named "username":
// const username = req.cookies.username;

/* ************************************************************************* */

// Import the API routes from the router module
const router = require("./router");

/* ************************************************************************* */

// Production-ready setup: What is it for, and when should I enable it?

// The code includes commented sections to set up a production environment where the frontend and backend are served from the same server.

// What it's for:
// - Serving frontend static files from the backend, which is useful when building a single-page application with React, Angular, etc.
// - Redirecting unhandled requests (e.g., all requests not matching a defined API route) to the frontend's index.html. This allows the frontend to handle client-side routing.

// When to enable it:
// It depends on your project and its structure. If you are developing a single-page application, you'll enable these sections when you are ready to deploy your project to production.

// To enable production configuration:
// 1. Uncomment the lines related to serving static files and redirecting unhandled requests.
// 2. Ensure that the `reactBuildPath` points to the correct directory where your frontend's build artifacts are located.

/*
const reactBuildPath = `${__dirname}/../../frontend/dist`;

// Serve react resources

app.use(express.static(reactBuildPath));

// Redirect unhandled requests to the react index file

app.get("*", (req, res) => {
  res.sendFile(`${reactBuildPath}/index.html`);
});
*/

/* ************************************************************************* */

// Middleware for Error Logging (Uncomment to enable)
// Important: Error-handling middleware should be defined last, after other app.use() and routes calls.

/*
// Define a middleware function to log errors
const logErrors = (err, req, res, next) => {
  // Log the error to the console for debugging purposes
  console.error(err);
  console.error("on req:", req.method, req.path);

  // Pass the error to the next middleware in the stack
  next(err);
};

// Mount the logErrors middleware globally
app.use(logErrors);
*/

/* ************************************************************************* */

// Mount the API routes under the "/api" endpoint
app.use("/api", router);

module.exports = app;
