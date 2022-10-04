

const { Sequelize, DataTypes} = require('sequelize');
const Article = require('./articleModel.js');
const sequelize = require('./index.js');

const Commentaire = sequelize.define("Commentaire", {
  id: {
    type: DataTypes.INTEGER,
    allowNull:false,
    autoIncrement: true,
    primaryKey: true
},

  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  Comment: {
    type: DataTypes.INTEGER,
  }
});

  
  Article.hasMany(Commentaire);
  Commentaire.belongsTo(Article);

Commentaire.sync({ force:true})

module.exports = Commentaire;
