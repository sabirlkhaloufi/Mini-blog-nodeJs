const Category = require("../models/categorieModel");
const Article = require("../models/articleModel.js");


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Tutorial
  const category = {
    name: req.body.name,
  };
  Category.create(category);
  res.redirect("/category");
};

//   // Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
  const alldata = await Category.findAll({ raw: true, nest: true });
  res.render("dashboard/category/category", {
    categories: alldata,
  });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

  Category.findByPk(id)
    .then((data) => {
      if (data) {
        res.render("dashboard/category/updateCategory",{'data' :data});
        // res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find article with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving article with id=" + id,
      });
    });
};

exports.update = (req, res) => {

  const id = req.params.id;

  Category.update(req.body, {
    where: { id: id },
  })
    
        res.redirect("/category");
     
    
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Category.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.redirect("/category");
      } else {
        res.send({
          message: `Cannot delete article with id=${id}. Maybe article was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete article with id=" + id,
      });
    });
};


///show categorys for articles
exports.findAllCatToArt = async (req, res) => {
  const alldatacat = await Category.findAll({ raw: true, nest: true });
 return alldatacat;
};

//get Article By Categorys

exports.articleByCategory = async (req, res)=>{

  const alldatacat = await Category.findAll({ raw: true, nest: true });
  const id = req.params.id;

    const data = await Article.findAll( {
    where: { CategoryId: id },    raw: true, nest: true
    
  })
   res.render('home',{
    articles: data,
    categories:alldatacat

   });

}


//get number of allArticles
exports.countCategory = async (req, res) => {
  const data = await Category.findAndCountAll();
  return data;
}