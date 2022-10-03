const Sequelize = require('sequelize');
const db = require('../config/dbConfig');

const sequelize = new Sequelize(db.dbName,db.username,db.password, {
    host: db.host,
    dialect:db.dialect
  }); 
  
  // try {
  //   sequelize.authenticate();
  //   console.log('Connection has been established successfully.');
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }

  module.exports = sequelize;