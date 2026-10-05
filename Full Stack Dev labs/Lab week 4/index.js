/**
 * Purpose:
 * Express framework with Node.js
 * - Handle GET and POST requests
 * - Use query parameters, path parameters and JSON request bodies
 * - Serve static files from the public folder
 */

const express = require("express");
const app = express();
const SERVER_PORT = process.env.PORT || 3000;

//---------------- Middleware setup ----------------

// Serve static files from the public folder
app.use(express.static(__dirname + "/public"));

// Parse JSON request bodies
app.use(express.json());

// Parse traditional HTML form bodies
app.use(express.urlencoded({ extended: true }));

//---------------- Routes ----------------

// GET http://localhost:3000/hello
app.get("/hello", (request, response) => {
    response.status(200).type("text/plain").send("Hello Express JS");
});

// Default values: Pritesh Patel
app.get("/user", (request, response) => {
    const firstname = request.query.firstname || "Pritesh";
    const lastname = request.query.lastname || "Patel";

    response.json({
        firstname: firstname,
        lastname: lastname
    });
});

app.post("/user/:firstname/:lastname", (request, response) => {
    const firstname = request.params.firstname;
    const lastname = request.params.lastname;

    response.json({
        firstname: firstname,
        lastname: lastname
    });
});

// POST http://localhost:3000/users
// Send an array of users in the JSON request body
app.post("/users", (request, response) => {
    const users = request.body;

    if (!Array.isArray(users)) {
        return response.status(400).json({
            error: "The request body must be an array of users."
        });
    }

    const validUsers = users.every((user) => {
        return (
            user !== null &&
            typeof user === "object" &&
            typeof user.firstname === "string" &&
            typeof user.lastname === "string" &&
            user.firstname.trim() !== "" &&
            user.lastname.trim() !== ""
        );
    });

    if (!validUsers) {
        return response.status(400).json({
            error: "Each user must have a non-empty firstname and lastname."
        });
    }

    response.json(users);
});


app.listen(SERVER_PORT, () => {
    console.log("Server is running on http://localhost:" + SERVER_PORT);
});