const express  =  require("express")
const{ studentData,createData,updateData,deleteData}  = require("../controlers/student")
const router =  express.Router();


router.route("/get/:roll/:sem").get(studentData);
router.route("/create").post(createData);
router.route("/update/:roll/:semester/:subject").patch(updateData);
router.route("/delete/:roll").delete(deleteData);


module.exports = router;