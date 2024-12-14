const express = require("express");
const router = express.Router();
const {createData, getData} = require("../controlers/placementData");



router.route("/create").post(createData);

router.route("/get").get(getData);

module.exports = router;