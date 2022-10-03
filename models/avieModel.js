

const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./index.js');

const Avie = sequelize.define('Avies', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
   
   
  });
  
  

  // Category.sync()

module.exports = Avie;
