const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mysql = require('mysql')
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'hangman'
})

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// =========================================================
// Database
// =========================================================
connection.connect()
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})
// connection.end()

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
// app.post('/auth', (req, res) => {
//   console.log("Request: ", req.body)
//   res.send(req.body)
// })

app.listen(3000)