// Update with your config settings.
const dotenv = require("dotenv");
dotenv.config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    pool: { min: 0, max: 10 },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    }
  },

  production: {
    client: 'mysql',
    connection: process.env.DATABASE_URL,
    pool: { min: 0, max: 10 },
    migrations: {
      directory: __dirname + 'db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    }
  }

};