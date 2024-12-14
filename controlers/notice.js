//noticeData , createData, updateData, deleteData
const noticeDb = require("../models/notice")


const  noticeData = async (req,res)=>{
    
    try{
        const latestNotices = await noticeDb.find()
      .sort({ date: -1 }) // Sort by date in descending order
      .limit(10); // Limit to the latest 10 notices (optional)
       if(!latestNotices) res.status(201).json({"message":" No Notice  "})
        res.status(201).json(latestNotices);

    }
    catch(error){
        res.status(500).json({ message: error.message });
    }

}
const  createData = async (req,res)=>{
    
    try{
        const fileData =null;
        if(req.file)
         fileData={data: req.file.buffer, contentType:req.file.minetype};
          const newNotice = await noticeDb.create(
          {  title: req.body.title,
            file:fileData
          }
          );

           if(!newNotice) 
            res.status(400).json({"msg":"required field are nessaray "});

           res.status(201).json({"message":" suceessfull created "});


    }
    catch(error){
        res.status(400).json({ error: error.message });
    }

}

const  deleteData = async (req,res)=>{
    
    try{
        const id = req.query.id;
        console.log(req.query);
        
        const deletedNotice = await noticeDb.findByIdAndDelete(id);
        if (!deletedNotice) return res.status(404).json({ message: 'Notice not found' });
        res.status(201).json({ message: 'Notice deleted successfully' });

    }
    catch(error){
        res.status(500).json({ message: error.message });
    }

}

module.exports={noticeData,createData, deleteData}