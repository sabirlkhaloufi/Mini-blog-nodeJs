const express = require('express')

const Router = require('./routes/index.js')

const app = express()

const port = 3000

app.use('/',Router)

app.listen(port, () => {
  console.log(`server has started ${port}`)
})


module.exports = app;