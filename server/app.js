const express = require('express')
const app = express()
const cors = require('cors')
const { urlencoded } = require('express')
const routes = require('./routes/index')
const port = 3000

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true}))

app.use('/', routes)

app.listen(port, () => console.log(port))

module.exports = app