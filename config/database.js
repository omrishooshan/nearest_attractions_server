let mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/nearest_AttractionDB'); //for local host 



mongoose.connect('mongodb+srv://omrishooshan:dsadsadpjo@cluster0.pzwqb.mongodb.net/nearest_AttractionDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log('database connected')
}).catch(err=>{
    console.log("database error:"+err)
})

// let db = mongoose.connection

// db.once('open',()=>{console.log("connected")})





