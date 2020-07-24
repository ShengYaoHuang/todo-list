const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const app = express()

// 設定連線到 mongoDB://[資料庫帳號]:[資料庫密碼]@[MongoDB位置]:[port]/[資料庫名稱] 
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('App.js is running on http://localhost:3000')
})