const mongoose = require("mongoose");

const placementSchema  =new mongoose.Schema(
    {
        stdName:{type : String , required: true },
        package:{type : Number , required : true },
        companyName :{ type : String , required : true },
        year: {type: Number, required: true}
    }
)

module.exports = mongoose.model("placementData", placementSchema);