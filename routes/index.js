const article = require('../controller/articleController.js')
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.ejs')
})
  
router.get('/article', (req, res) => {
    res.render('show.ejs')
})


router.get('/createArticle', (req, res) => {
    res.render('dashboard/Articles/createArticle.ejs')
})

// module.exports = router;