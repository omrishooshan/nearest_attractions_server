let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/itsafe'); //for local host 

let Schema = mongoose.Schema;

let AttractionsSchema = new Schema({
  Name: String,
  ShortDescription: String,
  FullDescription: String,
  VendorId: String,
  Vendor_Name: String,
  Product_Url: String,
  Accessibility: String,
  Address: String,
  Attraction_Type: String,
  Blue_Flag: String,
  City: String,
  Diving_beach: String,
});

module.exports = mongoose.model("Attractions", AttractionsSchema);
