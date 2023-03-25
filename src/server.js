const express = require('express')
const app = express()

const requestTime = function (req, res, next) {
  req.requestTimes = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTimes}</small>`
  res.send(responseText)
})

app.listen(3000)