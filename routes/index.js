// const article = require('./controller/articleController.Js');
// const category = require('./controller/categorieController.Js');
// const commentair= require('./controller/commentairController.js');
// const avie = require('./controller/avieController.js');

const articles = require("../controller/articleController.js");

const express = require('express');
const { response } = require("../app.js");
const router = express.Router();

// router.get('/', (req, res) => {
//     res.render('home.ejs')
// })

router.get('/', async (req, res) => {
    const data = await articles.getAllArticles(req, res)
     res.render('home.ejs',
       {
        articles: data,
        categories:
        [
          {
            cat:"sllsmkql"
          },
          {
            cat:"sllsmkql"
          },
          {
            cat:"sllsmkql"
          },
        ]
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

router.get('/dashboard', async (req, res) => {
  const countArticles = await articles.countArticle(req, res);
    res.render('dashboard/index.ejs',{
      nbrArticles:countArticles,
    })

    console.log(countArticles);
})

module.exports = router;