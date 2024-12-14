const placementData  = require("../models/placementData");


const createData = async (req , res) => {
     try{
        const {stdName , package , companyName , year } = req.body;
        console.log(req.body);
        if(stdName && package && companyName && year){
        const stdData  =  new placementData({stdName , package , companyName , year});
         await stdData.save();
         res.status(201).json(stdData);
        }
        else res.status(400).json({"msg": " all filed are required ."});

     }
     catch (error){
        res.status(400).json({ error: error.message });
     }

}

const getData = async (req,res)=>{

   try{
   const data = await placementData.find({year: req.query.year}); // fetching data yearwise .
   if(data) 
    res.status(201).json({ "result" : data });
   else
   res.status(201).json({"msg": "empty database ."})
   } catch(error){

      res.status(400).json({"msg": " all filed are required ."});
   }


}

module.exports= {createData, getData};