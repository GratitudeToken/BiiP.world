const path = require('path')
const express = require('express')


const app = express()


// express.json to decifer json data from incoming requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public_html')))

app.listen(3000)
