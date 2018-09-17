const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

// =========================================================
// Authentication
// =========================================================
app.post('/auth', (req, res) => {
  console.log("Request: ", req.body)
  res.send(req.body)
})

app.listen(3000)