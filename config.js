// config.js
require('dotenv').config();

const config = {
  appName: process.env.APP_NAME || "Default App",
  port: process.env.PORT || 4000,
  dbHost: process.env.DB_HOST || "127.0.0.1",
  dbUser: process.env.DB_USER || "root",
  apiKey: process.env.API_KEY || "default_key"
};

module.exports = config;
