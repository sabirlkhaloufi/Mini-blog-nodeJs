

const { Sequelize, DataTypes} = require('sequelize');
const Article = require('./articleModel.js');
const sequelize = require('./index.js');

const Avie = sequelize.define('Avies', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    avie: {
      type: DataTypes.STRING,
      allowNull:false
  },
   
   
  });
  


  Article.hasMany(Avie);
  Avie.belongsTo(Article);

<<<<<<< HEAD
  // Avie.sync({ force:true})
=======
  // Avie.sync()
>>>>>>> 89189279c6abcf527c0b506c36ed44f875a37379

module.exports = Avie;
