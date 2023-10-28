// Sequelize connection to database


require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize;

// JAWSDB_URL is a Heroku config variable, else use local database
if ( process.env.JAWSDB_URL ) {
  sequelize = new Sequelize( process.env.JAWSDB_URL );
} else {
  sequelize = new Sequelize( 
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
};

module.exports = sequelize;