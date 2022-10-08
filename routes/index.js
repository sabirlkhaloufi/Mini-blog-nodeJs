
const articles = require("../controller/articleController.js");
const category = require("../controller/categorieController");


const express = require('express');
const { response } = require("../app.js");
const router = express.Router();

// router.get('/', (req, res) => {
//     res.render('home.ejs')
// })

router.get('/', async (req, res) => {
    const data = await articles.getAllArticles(req, res)
    const dataCat = await category.findAllCatToArt(req,res)

     res.render('home.ejs',
       {
        articles: data,
        categories:dataCat
        
      });
  })


  router.get('/article/:id', async (req, res) => {
    const data = await articles.findOne(req, res)
     res.render('show',
       {
        article: data
      });
      console.log(data)
  })

router.get('/dashboard', (req, res) => {
    res.render('dashboard/index.ejs')
})

module.exports = router;