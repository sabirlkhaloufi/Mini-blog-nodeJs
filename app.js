const express = require('express')
const sequelize = require('./models/');
const ArticleController = require('./controller/articleController.Js')
const app = express()
const Router = require('./routes/index.js')
const Article = require('./routes/Article.js')
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
const port = 3000

app.set('view engine', 'ejs');

app.use('/',Router)
app.use('/api/articles',Article)

app.listen(port, () => {
  console.log(`server has started ${port}`)
})


module.exports = app;