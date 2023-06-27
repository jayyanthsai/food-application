const mongoose= require("mongoose");

const locationSchema = new mongoose.Schema({
    name:{type:String},
    city_id:{type:Number},
    location_id:{type:String},
    city:{type:String},
    country_name:{type:String}
});

const locationModel=mongoose.model("locs",locationSchema,"locations_collection")

module.exports=locationModel;