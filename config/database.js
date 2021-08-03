let mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/nearest_AttractionDB'); //for local host 


let db = mongoose.connection

db.once('open',()=>{console.log("connected")})





