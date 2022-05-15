// Import User model
const User = require("../models/user");

// Sets up UsersController.
// Sets out functions called in the routes
// wrapped into an object
const UsersController = {

  // Sets up function to be used in /users/new GET route
  New: (req, res) => {
    res.render("users/new", {});
  },

  // Sets up function to be used in /users POST route
  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        throw err;
      }
      res.status(201).redirect("/posts");
    });
  },
};

module.exports = UsersController;
