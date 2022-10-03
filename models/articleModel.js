const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./index.js');

const Article = sequelize.define('Articles', {
    // Model attributes are defined here
    title: {
      type:  Sequelize.Sequelize.DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.DataTypes.STRING
      // allowNull defaults to true
    },
    centenu: {
        type: Sequelize.DataTypes.STRING
        // allowNull defaults to true
    },
    fk_categorie: {
        type: Sequelize.DataTypes.INTEGER
        // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });



module.exports = Article;


