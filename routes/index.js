const article = require('../controller/articleController.js')
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

module.exports = router;