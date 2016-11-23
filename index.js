var express = require("express")
var app = express()
var hbs = require("hbs")
var request = require("request")
var Skin = require("./db/schema.js").Skin
var Champion = require("./db/schema.js").Champion

app.set("view engine", "hbs")

app.listen("3001", () => {
  console.log("express is working!")
})

app.get("/", (req, res) => {
  console.log("working")
   var url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=RGAPI-fad0a8b6-b0e0-4393-b52f-136a9ee42cdc"
   request(url, function(err, response, body) {
     var championData = JSON.parse(body);
     var championPic = "http://ddragon.leagueoflegends.com/cdn/6.22.1/img/champion/"
     var champions = championData.data
     let championName = []
     console.log(champions)
     for (var i in champions){
       var result = champions[i]
       for (var prop in result){

      if (prop === "name"){
        championName.push(result[prop])
        var unique = championName.filter(function(elem, index, self) {
          return index == self.indexOf(elem);
        })
        // console.log(championName)
        // console.log(unique)
      }
      else{
        console.log("nope")
      }
       }
     }

     Champion.find({}).then((skinData) => {
       let skinInfo = []
       skinData.forEach(function (result) {
        //  console.log(result)

         result.skins.forEach((skinArrayKeys) => {

           console.log(skinArrayKeys.skinImg)
           skinInfo.push(skinArrayKeys)

         })
         console.log(skinInfo)
        for (var i in skinInfo){

          for (var o in unique){
            if (unique[o]== skinInfo[i].name){
              console.log(unique[o] + " = " + skinInfo[i].skinImg) //unique[o] is each name in the array and skinInfo[i] is each object
            }
          }



        }
        // for (var i=0; i < unique.length; i++){
        //
        //   if(unique[i] == skinData.name ){
        //     console.log(unique[i] + " = " + skinArrayKeys)
        //   }
        //   else{
        //     console.log("didnt work")
        //   }
        // }

      })
// i have the array full of the skinData now.
      // skinImgs.forEach()
      res.render("home", {champions, championPic, skinData, skinInfo, unique})
     })
   })
})

//need to set variables and access it in handlebars through a forEach loop here, rather than in views
// Champion.find({}).then((skinData) => {
//   skinData.forEach(function (result) {
//    var skinArray = result.skins
//    return skinArray.forEach((skinArrayKeys) => {
//      var skinArrayKeys = skinArrayKeys
//      console.log(skinArrayKeys.skinImg)
//    })
//  })
//  res.render("home", {champions: championData.data, championPic: championPic, skinData: skinData})
// })


// function to reverse string

// function reverse(str){
//
// }
