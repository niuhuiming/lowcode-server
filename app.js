const express = require('express')
const cors = require('cors')
const app = express()

// 解析json数据格式。处理Content-Type: application/json
app.use(express.json())
app.use(cors())
// 解析表单数据。处理Content-Type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// 挂载路由模块
const compRouter = require('./router/comps')
app.use('/api', compRouter)

app.listen(3000, () => {
  console.log('服务启动在3000端口')
})
