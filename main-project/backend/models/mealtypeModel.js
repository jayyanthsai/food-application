const mongoose= require("mongoose");
const mealtypeSchema = new mongoose.Schema({
    name:{type:String},
    content:{type:String},
    image:{type:String},
    meal_type:{type:Number}
});
const mealtypeModel=mongoose.model("meals",mealtypeSchema,"meals_collection")
module.exports=mealtypeModel;