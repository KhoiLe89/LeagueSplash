var mongoose = require("./connection.js")
var Schema = require("./schema.js")
var seedData = require("./seeds.json")

var Champion = mongoose.model("Champion")
var Skin = mongoose.model("Skin")


Champion.remove({}).then(() => {
  Champion.collection.insert(seedData).then(() => process.exit())
}).catch(err => console.log(err))

//need to remove all seeds before entering new ones. We've only pushed in Justicar not mecha yet.
