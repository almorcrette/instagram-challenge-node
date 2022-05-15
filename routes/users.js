const express = require("express");

// expressRouter class creates modular, mountable route handlers
// A Router instance is a complete middleware and routing system
// Often referred to as a 'mini-app'
// See: https://expressjs.com/en/guide/routing.html for details
const router = express.Router();

// Imports functions to be used in users/ routes
//wrapped into an object UsersController
const UsersController = require("../controllers/users");

// /users routes
router.get("/new", UsersController.New);
router.post("/", UsersController.Create);

module.exports = router;
