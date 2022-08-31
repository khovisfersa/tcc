const express = require("express")
const app = express()
const porta = process.env.PORT || 3000
var history = require('connect-history-api-fallback');

app.use(express.static(__dirname + "/dist/"))
app.use(history({
  index: "/index.html"
}))

app.get("/", function(req, res) {
  res.sendfile(__dirname +'/dist/index.html')
})

app.listen(porta, function() {
  console.log("está servindo o app")
})