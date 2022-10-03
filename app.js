const express = require('express')
const sequelize = require('./models/');
const ArticleController = require('./controller/articleController.Js')
const app = express()
// const Router = require('./routes/index')
require("./routes/Article")(app);


// parse requests of content-type - application/json
// app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

const port = 3000

// app.use('/',Router)
// require("./routes/")(app);
// require("./routes/index")(app);

app.listen(port, () => {
  console.log(`server has started ${port}`)
})






module.exports = app;