const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import auth services for security operations
const { hashPassword } = require("./services/auth");

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.post("/items", itemControllers.add);

// Import userControllers module for handling user-related operations
const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", hashPassword, userControllers.add);

// Import authControllers module for handling auth-related operations
const authControllers = require("./controllers/authControllers");

router.post("/login", authControllers.login);

/* ************************************************************************* */

module.exports = router;
