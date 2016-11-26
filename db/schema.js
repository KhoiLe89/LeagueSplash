var mongoose = require("./connection.js")
// var Schema = mongoose.Schema

var SkinSchema = mongoose.Schema({
  name: String,
  nameOfSkin: String,
  skinImg: String,
  price: Number,
  releaseDate: String,
  spotlight: String
})
var ChampionSchema = mongoose.Schema({
  name: String,
  skins: [SkinSchema]
})

var Skin = mongoose.model("Skin", SkinSchema)
var Champion = mongoose.model("Champion", ChampionSchema)


//THE FOLLOWING is dummy data to test.
// var aatrox = new Champion({name: "Aatrox"})
// var justicarAatrox = new Skin({nameOfSkin: "Justicar Aatrox", skinImg:"http://www.mobafire.com/images/champion/skins/landscape/aatrox-justicar.jpg"})
// var mechaAatrox = new Skin({nameOfSkin: "Mecha Aatrox", skinImg:"http://www.mobafire.com/images/champion/skins/landscape/aatrox-mecha.jpg"})
//
//
// aatrox.skins.push(justicarAatrox)
//
// aatrox.save((err, champion) => {
//   if (err){
//     console.log(err)
//   }
//   else{
//     console.log(champion + " was saved to the db")
//   }
// })

module.exports = {
  Champion: Champion,
  Skin: Skin
}
