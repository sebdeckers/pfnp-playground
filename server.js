var express = require('express')
var app = express()

var message = 'How are you today?'

app.use(express.static('public'))

app.get('/motd', function (req, res) {
  res.send(message)
})

app.get('/edit/:motd', function (req, res) {
  message = req.params.motd
  res.send('Message updated.')
})

app.listen(process.env.PORT || 3000)
