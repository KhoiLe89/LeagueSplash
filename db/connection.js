var mongoose = require("mongoose")
mongoose.connect('mongodb://heroku_wcfgnhm2:497t721boiaangh3mnn2ih2hdb@ds119768.mlab.com:19768/heroku_wcfgnhm2')

var db = mongoose.connection

db.on('error',  err =>{
  console.log(err)
})

db.once('open', () => {
  console.log("Database has been connected!")
})

mongoose.Promise = global.Promise
module.exports = mongoose
