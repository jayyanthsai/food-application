const menuitemModel=require("../models/mealtypeModel")
module.exports.getmealtype=async(req,res)=>{
    // const location_id=req.params;
    try{
        let mealtypeList=await menuitemModel.find()
        let sendData={
            status:mealtypeList.length===0 ? false:true,
            mealtypeList
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
