// USER AUTHENTICATION ROUTES FOR SIGNING UP, SIGNING IN, AND SIGNING OUT


const router = require('express').Router();
const bcrypt = require('bcrypt');
const { handleError, authorize } = require('../../utils/helpers');
const { User } = require("../../models");

// POST route for signing up a user -> /api/users/signup
// Creates a new user with the username and password (after checking to see if the user exists already), hashes the password, saves the user to the database, saves the user's id/username to the session, and redirects to the dashboard page
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      throw new Error("UserAlreadyExists")//409
    }
    const newUser = await User.create({
      username,
      password,
    });
    const user_id = newUser.dataValues.id;
    if (newUser) {
      req.session.save(() => {
        req.session.user_id = user_id;
        req.session.signed_in = true;
        req.session.username = username;
        res.redirect(`/dashboard`);
      });
    } else {
      throw new Error("UserCreationFailed")//401
    }
  } catch (err) {
    handleError(err, res, req);
  }
});

// POST route for signing in a user -> /api/users/signin
// Finds the user by the username, compares the password, saves the user's id/username to the session, and redirects to the dashboard page
router.post("/signin", async (req, res) => { 
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if(!user) {
      throw new Error("UserValidationFailed")//401
    }
    const user_id = user.dataValues.id;  
    const match = await bcrypt.compare(password, user.password);
    if(!match) {
      throw new Error("UserValidationFailed")//401
    }
    req.session.save(() => {
      req.session.user_id = user_id;
      req.session.signed_in = true;
      req.session.username = username;
      res.redirect("/dashboard");
    });
  } catch (err) {
    handleError(err, res, req);
  }
});

// POST route for signing out a user -> /api/users/signout
// Destroys the session and redirects to the sign in page after checking to see if the user is signed in
router.post("/signout", authorize, (req, res) => {
  try {
    req.session.destroy(() => {
      res.redirect("/signin");
    });
  } catch (err) {
    handleError(err, res, req);
  }
});

module.exports = router;