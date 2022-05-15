// Import User model
const { required } = require("nodemon/lib/config");
const User = require("../models/user");

// Sets up UsersController.
// Sets out functions called in the routes
// wrapped into an object
const UsersController = {

  // Sets up function to be used in /users/new GET route
  New: (req, res) => {
    res.render("users/new", { message: req.flash("message") });
  },

  // Sets up function to be used in /users POST route
  Create: (req, res) => {
    const user = new User(req.body);
    if (
      user.username === '' ||
      user.email === '' ||
      user.password === ''
      ) {
        req.flash("message", "Username, email and password all required. Try again");
        res.redirect("/users/new");
    } else {
      user.save((err) => {
        if (err) {
           err;
        }
        res.status(201).redirect("/posts");
      });
    }
  },
};

module.exports = UsersController;
