


const { Sequelize, DataTypes} = require('sequelize');
const Article = require('./articleModel');
const sequelize = require('./index.js');

const Commentaire = sequelize.define('Commentaires', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      autoIncrement: true,
      primaryKey: true
  },
  Name :{
    type:DataTypes.STRING,
     allowNull:false
  },
  comment:{
    type:DataTypes.STRING,
    allowNull:false
    
  }
  });
  
  Article.hasMany(Commentaire);
  Commentaire.belongsTo(Article);

  // Commentaire.sync()
  Commentaire.sync({ alter:true})

module.exports = Commentaire;
