const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const allRoutes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbsEngine = handlebars.create({ helpers });

// Set up the session with cookies
// Use a secrect string to sign the session ID cookie, and set the cookie options
const sesh = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 600000, // 10 mins
    httpOnly: true, // The cookie only accessible by the web server
    secure: false,
    sameSite: 'strict', // The cookie will only be sent with requests from the same site
  },
  resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
  saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store
  store: new SequelizeStore({ db: sequelize })
};

app.use(session(sesh)); // Use the session middleware

app.engine('handlebars', hbsEngine.engine); // Set up the template engine
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(allRoutes);

// Start the server and sync the database
const serverInit = async () => {
    try {
        await sequelize.sync({ force: false }); // force: true will drop and re-create all database tables on startup
        app.listen(PORT, () => console.log('Now listening'));
    } catch (err) {
        console.error(err, `It didn't work!`);
    }
};

serverInit();