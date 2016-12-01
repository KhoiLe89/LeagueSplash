var express = require("express")
var app = express()
var hbs = require("express-handlebars")
var request = require("request")
var Skin = require("./db/schema.js").Skin
var Champion = require("./db/schema.js").Champion


app.set("view engine", "hbs")
app.use("/assets", express.static("public"));
app.engine('hbs', hbs({extname:'hbs', defaultLayout:'layout-main.hbs'}));
app.listen(process.env.PORT || 4200)
app.listen("3001", () => {
  console.log("express is working!")
})

app.get("/", function(req, res){
  var url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=RGAPI-fad0a8b6-b0e0-4393-b52f-136a9ee42cdc"
  request(url, function(err, response, body) {
    var championData = JSON.parse(body)
    var championPic = "http://ddragon.leagueoflegends.com/cdn/6.22.1/img/champion/"
    var champions = championData.data
    let championName = []
    let championPics = []


    for (var i in champions){
      var result = champions[i]
      for (var prop in result){
         if (prop === "name"){
           championName.push(result[prop])
           var unique = championName.filter(function(elem, index, self) {
             return index == self.indexOf(elem);
           })
         }
         else{
           console.log("nope")
         }
      }
    }

    for (var i in champions){
      var result = champions[i]
      for (var prop in result){
         if (prop === "image"){
           championPics.push(result[prop])
           var uniquePics = championPics.filter(function(elem, index, self) {
             return index == self.indexOf(elem);
           })

         }
         else{
           console.log("nope")
         }
      }
    }

    Champion.find({}).then((skinData) => {
      console.log(champions)
      let skinInfo = []
      skinData.forEach(function (result) {
       //  console.log(result)
        result.skins.forEach((skinArrayKeys) => {
          skinInfo.push(skinArrayKeys)
        })
       for (var i in skinInfo){

         for (var o in unique){
           if (unique[o]== skinInfo[i].name){
             console.log(unique[o] + " = " + skinInfo[i].skinImg)
              unique[o] = skinInfo[i].skinImg

           }
         }
       }
     })
     uniquePics.forEach(function(uniquePicsItem){
     console.log(uniquePicsItem.full)
     championPics.push(uniquePicsItem.full)

     })
     console.log(championPics)

     res.render("index", {champions, championPic, skinData, skinInfo, unique, uniquePics, championPics})

    })
  })
})
app.get("/api/champions", (req, res) => {
   var url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=RGAPI-fad0a8b6-b0e0-4393-b52f-136a9ee42cdc"
   request(url, function(err, response, body) {
     var championData = JSON.parse(body)
     var championPic = "http://ddragon.leagueoflegends.com/cdn/6.22.1/img/champion/"
     var champions = championData.data
     let championName = []
     let championPics = []


     for (var i in champions){
       var result = champions[i]
       for (var prop in result){
          if (prop === "name"){
            championName.push(result[prop])
            var unique = championName.filter(function(elem, index, self) {
              return index == self.indexOf(elem);
            })
          }
          else{
            console.log("nope")
          }
       }
     }

     for (var i in champions){
       var result = champions[i]
       for (var prop in result){
          if (prop === "image"){
            championPics.push(result[prop])
            var uniquePics = championPics.filter(function(elem, index, self) {
              return index == self.indexOf(elem);
            })

          }
          else{
            console.log("nope")
          }
       }
     }

     Champion.find({}).then((skinData) => {
       console.log(champions)
       let skinInfo = []
       skinData.forEach(function (result) {
         result.skins.forEach((skinArrayKeys) => {
           skinInfo.push(skinArrayKeys)
         })
        for (var i in skinInfo){
          for (var o in unique){
            if (unique[o]== skinInfo[i].name){
              console.log(unique[o] + " = " + skinInfo[i].skinImg)
               unique[o] = skinInfo[i].skinImg
            }
          }
        }
      })
      uniquePics.forEach(function(uniquePicsItem){
      championPics.push(uniquePicsItem.full)
      })
      res.json(skinData)
     })
   })
})

app.get("/api/champions/:name", (req, res) => {
  Champion.findOne({name: req.params.name}).then((championData) => {
    res.json(championData)
  })
})

app.get("/api/champions/:name/:nameOfSkin", (req, res) => {
  Champion.findOne({name: req.params.name}).then((result) => {
  var resultSkins = result.skins
    resultSkins.forEach(function (arrayItem) {
      console.log(arrayItem.nameOfSkin)
      if (arrayItem.nameOfSkin == req.params.nameOfSkin){
        specificSkin = arrayItem
      }
    })
    res.json(specificSkin)
  })
})

app.get("/champions/:name/:nameOfSkin/spotlight", (req, res) => {
  Champion.findOne({name: req.params.name}).then((result) => {
  var resultSkins = result.skins
    resultSkins.forEach(function (arrayItem) {
      console.log(arrayItem.nameOfSkin)
      if (arrayItem.nameOfSkin == req.params.nameOfSkin){
        specificSkin = arrayItem
      }
    })
    res.render("spotlight", {
      result, specificSkin
    })
  })
})
