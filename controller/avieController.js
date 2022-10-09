
const Avie = require("../models/avieModel.js");

  // Create and Save a new Tutorial
exports.create = (req, res) => {
    // Create a Tutorial
    const avie = {
      avie: req.body.Avie,
    };
    // Save Tutorial in the database
    Avie.create(avie);
    res.redirect("/Avis")
  };
  
//   // Retrieve all Tutorials from the database.
  exports.getAllAvie = async(req, res) => {
  
    const allData = await Avie.findAll({}).then(data => {
      return data
        // return JSON.parse(JSON.stringify(data))
      })
    
      return allData
  };
  
 // Find a single Tutorial with an id
  exports.findOne = async(req, res) => {
    const id = req.params.id;
    const allData = await Avie.findByPk(id).then(data => {
      return data
      })
      return allData
    };  

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Avie.update(req.body, {
      where: { id: id }
    })
  
    res.redirect("/Avis")
  };
  
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Avie.destroy({
      where: { id: id }
    })
          
          res.redirect("/Avis")
  }
     
