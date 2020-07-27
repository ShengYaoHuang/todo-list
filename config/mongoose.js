const mongoose = require('mongoose')
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

module.exports = db