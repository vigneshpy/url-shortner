const express = require('express')
const { dbConnect } = require('./dbConnect')

const app = express()
dbConnect()


app.listen(3000)