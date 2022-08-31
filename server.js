const express = require("express")
const app = express()
const porta = process.env.PORT || 3000

app.use(express.static(__dirname + "/dist/"))

app.get("/", function(req, res) {
  res.sendfile(__dirname +'/dist/index.html')
})

app.listen(porta, function() {
  console.log("está servindo o app")
})