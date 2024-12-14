//facultyData, createData, updataData, deleteData
const facultyDb = require("../models/faculty");

const facultyData = async (req, res) => {
  try {
    // console.log("this is faculty data router ");
    // console.log( req.query.role.toUpperCase());
    const data = await facultyDb.find( {role: req.params.role});
    if (data) res.status(201).json(data);
    else res.status(201).json({ msg: "this database is empty" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createData = async (req, res) => {
    try{

  if(req.body.name && req.body.role && req.body.levelOfPost && req.body.email && req.body.education_Qulification)
  { const data= await facultyDb.create(req.body)
 
    res.status(201).json(data);
  }
    else 
    res.status(400).json({"msg":"required field are nessaray "});

}
catch(error){
    req.status(400).json({error:error.message});
}

};
const updateData = async (req, res) => {

    try{
        const id = req.query.id;
        const updatedUser = await facultyDb.findByIdAndUpdate(id, req.body);
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
            console.log(updatedUser);
            
            res.json({ message: 'User updated successfully' });

    }
    catch(error){
        req.status(400).json({error:error.message});
    }

};

const deleteData = async (req, res) => {

    try {
        const deletedUser = await facultyDb.findByIdAndDelete(req.query.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
      } 
      catch (error) {
        res.status(500).json({ message: error.message });
      }

};

module.exports = { facultyData, createData, updateData, deleteData };
