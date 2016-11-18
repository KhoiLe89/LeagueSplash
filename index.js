var express = require("express")
var app = express()

app.listen("3001", () => {
  console.log("express is working!")
})

app.get("/", (req, res) => {
  res.send("LegendsSplash")
})
