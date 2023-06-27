const mongoose=require("mongoose");
const ObjectId=mongoose.Schema.Types.ObjectId
const menuitemSchema=new mongoose.Schema({
  name: {type:String},
  description: {type:String},
  restaurantId: {type:ObjectId},
  ingridients: {type:Array},
  image: {type:String},
  price: {type:Number},
  qty:{type:Number},
});
const menuitemsModel=mongoose.model("menus",menuitemSchema,"menuitems_collection")
module.exports=menuitemsModel;