


const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./index.js');

const Commentaire = sequelize.define('Commentaires', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
   
   
  });
  
  

  // Commentaire.sync()

module.exports = Commentaire;
