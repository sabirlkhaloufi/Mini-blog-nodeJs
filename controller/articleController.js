
const Article = require("../models/articleModel.js");

  // Create and Save a new articles
exports.create =  (req, res) => {  
    Article.create(req.body)
    res.redirect('/articles');
}

//get All articles
  exports.getAllArticles = async (req, res) => {
    const allData = await Article.findAll();
    return allData
  };


//get one article
  exports.findOne =  async (req, res) => {
    const id = req.params.id;
    const allData = await Article.findByPk(id);
      return allData
  }


  //update article 
  exports.update = (req, res) => {
    const id = req.params.id;
    Article.update(req.body, {
      where: { id: id }
    })
    res.redirect("/articles")
  };

  //delete article
  exports.delete = (req, res) => {
    const id = req.params.id;
    Article.destroy({
      where: { id: id }
    })
    res.redirect("/articles")
  };


  //get number of allArticles
  exports.countArticle = async (req, res) => {
    const data = await Article.findAndCountAll();
    return data;
  }
  
