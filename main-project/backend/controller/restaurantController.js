const restaurantModel=require("../models/restaurantModel")
const menuitemModel=require("../models/menuitemModel")

module.exports.getRestaurantListByLocationId= async(req,res)=>{
    const location_id=req.params;  // location_id= {query_name:3}
    try{
        let restaurantList=await restaurantModel.find({location_id:location_id.query_name},{name:1,city:1,min_price:1})
        let sendData={
            status:restaurantList.length===0 ? false:true,
            restaurantList
        };
        res.status(200).send(sendData);
    }
    catch(error){
        res.status(500).send({
            status:false,
            hello:"wrong "
        })
    }
}

module.exports.getRestaurantListByRestaurantId=async(req,res)=>{
    const restaurant_id=req.params;
    try{
        let restaurantList=await restaurantModel.findById(restaurant_id.query_name)
        let sendData={
            status:restaurantList.length===0 ? false:true,
            restaurantList
        };
        res.status(200).send(sendData);
    }
    catch(error){
        res.status(500).send({
            status:false,
            hello:"wrong "
        })
    }
}

module.exports.getmenuitemsListByRestaurantId=async(req,res)=>{
    const r_id=req.params;
    try{
        let menulist=await menuitemModel.find({restaurantId:r_id.query_name})
        let sendData={
            status:menulist.length===0 ? false:true,
            menulist
        };
        res.status(200).send(sendData);
    }
    catch(error){
        res.status(500).send({
            status:false,
            hello:"wrong"
        })
    }
}

// module.exports.filter=async(req,res)=>{
//     try {
//         let filter={}  // {} ==> get all the data... !!
//         let {mealtype,loc_id,lcost,hcost,sort}=req.body


//         // below commented code is important

//         // if mealtype is not checked, then mealtype is checked as null
//         // if(mealtype!==undefined)
//         // filter["mealtype_id"]=mealtype


//         // if(loc_id!==undefined)
//         // filter["location_id"]=loc_id

//         // if(lcost !==undefined && hcost!==undefined){
//         //     filter["min_price"]= {$gte:lcost,$lte:hcost}
//         // }
//         // console.log(lcost, hcost);
//         let restaurantList=await restaurantModel.find(filter).sort({min_price:sort})
//         let sendData={
//             status:restaurantList.length===0 ? false:true,
//             restaurantList,
//             count:restaurantList.length
//         };
//         res.status(200).send(sendData);
//     } catch (error) {
//         res.status(500).send({
//             status:false,
//             hello:"wrong"
//         })
//     }
// }
