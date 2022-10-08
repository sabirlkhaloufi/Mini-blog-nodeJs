  // const fetch = require('node-fetch')
  const articles = require("../controller/articleController.js");
  const category = require("../controller/categorieController.js");
  const router = require("express").Router();
  const Article = require("../models/articleModel.js");
const Category = require("../models/categorieModel.js");


router.post("/addArticle", articles.create);

router.get("/getAllArticles", articles.getAllArticles);

router.get("/getArticle/:id", articles.findOne);

router.post("/updateArticle/:id", articles.update);

router.get("/deleteArticle/:id", articles.delete);

    router.get("/count", articles.countArticle);

router.get('/articles', async (req, res) => {
  const test = await articles.getAllArticles(req, res)
   res.render('dashboard/articles/articles.ejs',
     {
      articles: test
    });
})


router.get('/updateArticle/:id', async (req, res) => {
  const data = await articles.findOne(req, res)
  // console.log(data)
   res.render('dashboard/articles/updateArticle.ejs',
     {
      article: data
    });
  
})


// async function getData() {
//   const data = await articles.getAllArticles;
//   // const articlesData = await data.json();
//   return data;
// 

router.get('/addArticle', async (req, res) => {
const data = await category.findAllCatToArt(req,res)
res.render('dashboard/articles/createArticle.ejs',{
  category:data });
})


router.get('/updateArticle', (req, res) => {
res.render('dashboard/articles/updateArticle.ejs')
})

// app.use('/api/articles', router);
module.exports = router;
