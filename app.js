const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const Todo = require('./models/todo')
const methodOverride = require('method-override')
const routes = require('./routes') // 引用路由器

require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

// 將 request 導入路由器
app.use(routes)


app.listen(3000, () => {
  console.log('App.js is running on http://localhost:3000')
})