// const article = require('./controller/articleController.Js');
// const category = require('./controller/categorieController.Js');
// const commentair= require('./controller/commentairController.js');
// const avie = require('./controller/avieController.js');

const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.ejs')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard/index.ejs')
})




router.get('/articles', (req, res) => {
    res.render('dashboard/articles/articles.ejs')
  })


  router.get('/Avis', (req, res) => {
    res.render('dashboard/Avis/Avis.ejs')
  })


module.exports = router;