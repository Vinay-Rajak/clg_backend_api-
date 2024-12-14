const express = require("express");
const router = express.Router();
const {facultyData, createData, updateData, deleteData}= require("../controlers/faculty")


router.get( "/get/:role" ,  facultyData );

router.route("/create").post(createData);

router.route("/update").patch(updateData);

 router.route("/delete").delete(deleteData);


module.exports = router;