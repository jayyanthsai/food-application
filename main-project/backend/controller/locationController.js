const locationModel = require("../models/locationModel")


module.exports.home= (req,res)=>{
    res.send("hello Api call")
}

module.exports.getLocationList = async(req,res)=>{
    try{
        let locationList= await locationModel.find()
        let sendData={
            status:locationList.length===0 ? false:true,
            locationList
        };
        res.status(200).send(sendData);
    }catch(err){
        res.status(500).send({
            status:false,
            err
        })
    }
}