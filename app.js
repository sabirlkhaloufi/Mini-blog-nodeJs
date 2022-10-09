const express = require('express');
const app = express()

const Router = require('./routes/index.js')
const Article = require('./routes/Article.js')
const Category = require('./routes/Category.js')
const router = require('./routes/router.js')
const Avie = require('./routes/Avie.js')

const port = 3000

app.use(express.urlencoded({ extended: true })); //documentation

app.use(express.static(__dirname + '/public'));


app.use(router)


app.set('view engine', 'ejs');

app.use('/',Router)
app.use('/',Article)
app.use('',Category)
app.use('/api/avie',Avie)

app.listen(port, () => {
  console.log(`server has started ${port}`)
})