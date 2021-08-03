const express = require("express");
const { calcDistance } = require("../utils/GeolocationDistance");
const router = express.Router();
const Attraction = require("../models/attractionsModel");


router.route("/:latitude/:longitude").get(function (req, res) {
  let AttractionArr = [];
  const AttractionTypesSet = new Set();

  console.log("inside attractions router");
  Attraction.find({}, function (err, attractions) {
    if (err) {
      res.send(err);
    } else {
      attractions.map((attraction) => {
        AttractionTypesSet.add(attraction.Attraction_Type)
        AttractionArr.push({
          Name: attraction.Name,
          Id:attraction._id,
          VendorId: attraction.VendorId,
          Attraction_Type: attraction.Attraction_Type,
          Address: attraction.Address,
          Opening_Hours: attraction.Opening_Hours,
          Product_Url: attraction.Product_Url,
          distance: calcDistance(
            parseInt(req.params.latitude),
            parseInt(req.params.longitude),
            attraction.Y,
            attraction.X
          ),
        });
      
      });
      let typesArr=Array.from(AttractionTypesSet)
      typesArr.unshift("הכל", "אטרקציות שאהבתי")
      res.json({data: {attractions:AttractionArr, types:typesArr}});
    }
  });
});

module.exports = router;
