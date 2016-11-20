var express = require("express")
var app = express()
var hbs = require("hbs")
var request = require("request")

app.set("view engine", "hbs")

app.listen("3001", () => {
  console.log("express is working!")
})

app.get("/", (req, res) => {
  console.log("working")
   var url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=RGAPI-fad0a8b6-b0e0-4393-b52f-136a9ee42cdc"
   request(url, function(err, response, body) {
     var championData = JSON.parse(body);
     console.log(championData)
     res.render("home", {champions: championData.data})
   })
})
