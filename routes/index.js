
const express = require('express')
const router = express.Router();
router.get('/', (req, res) => {
    res.render('home.ejs')
})
  
router.get('/article', (req, res) => {
    res.render('show.ejs')
})

module.exports = router;