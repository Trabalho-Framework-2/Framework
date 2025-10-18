'use strict';
const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database').development;

// instancia o Sequelize
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  { host: dbConfig.host, dialect: dbConfig.dialect, logging: false }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// MODELS
db.User = require('./user')(sequelize, Sequelize.DataTypes);
db.Course = require('./course')(sequelize, Sequelize.DataTypes);

module.exports = db;
