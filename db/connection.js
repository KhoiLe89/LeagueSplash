var mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/leagueskins')

var db = mongoose.connection

db.on('error',  err =>{
  console.log(err)
})

db.once('open', () => {
  console.log("Database has been connected!")
})

mongoose.Promise = global.Promise
module.exports = mongoose
