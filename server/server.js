const express = require('express')
const mongoose = require('mongoose')
const PORT = 5000

const app = express()
app.use(express.json())

app.listen(PORT, console.log('Server started on port: ', PORT))