const express = require("express");
const router = express.Router();
const multer = require("multer");
const {noticeData, createData, deleteData}=require("../controlers/notice");
const storage = multer.memoryStorage();
const upload = multer({ storage });


router.route("/get").get(noticeData);


router.route("/create").all(upload.single('file')).post(createData);


router.route("/delete").delete(deleteData);

module.exports= router;