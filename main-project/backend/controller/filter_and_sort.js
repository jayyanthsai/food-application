const restaurantModel=require("../models/restaurantModel")
module.exports.filter_method=async(req,res)=>{
    try {
        let {meal_type,loc_id,cuisine,lcost,hcost,sort,page_no}=req.body;
        // let temp=req.body;
        // console.log(temp);
        let filter={}

        if(meal_type!==undefined)
        filter["mealtype_id"]=meal_type

        if(loc_id!==undefined)
        filter["location_id"]=loc_id

        if(cuisine!==undefined)
        filter["cuisine_id"]={$in:cuisine}

        if(lcost!==undefined && hcost!==undefined)
        filter["min_price"]={$lte:hcost,$gte:lcost}

        if(sort==undefined)
        sort=1



        let restaurantList=await restaurantModel.find(filter).sort({min_price:sort})
        let sendData={
            status:restaurantList.length===0 ? false:true,
            restaurantList,
            count:restaurantList.length
        };

        if(page_no!==undefined){
            let len_of_sendData=sendData.restaurantList.length
            let temp=(page_no-1)*2
            if(temp <= len_of_sendData+1){
                sendData.restaurantList=sendData.restaurantList.slice(temp,temp+2)
                sendData.count=sendData.restaurantList.length
            }
            console.log(sendData.restaurantList.length);
        }

        res.status(200).send(sendData);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status:false,
            hello:"wrong"
        })
    }
}
