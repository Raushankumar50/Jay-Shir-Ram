require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('raushan kumar');
})

app.get('/login', (req, res) => {
  res.send("<h1>Login Page</h1>");
})

app.get('/login/raushan', (req, res) => {
  res.send('<h1>Welcome Raushan</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})