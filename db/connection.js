var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/leagueskins')  //DB name

var db = mongoose.connection

db.on('error',  err =>{  //if DB errors out..
  console.log(err)
})

db.once('open', () => {
  console.log("Database has been connected!")
})

mongoose.Promise = global.Promise
module.exports = mongoose
