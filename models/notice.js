const mongoose = require("mongoose")

const noticeSchema = new mongoose.Schema(
    {
     title:{type:String , required :true },
     file:{data:Buffer, contentType:String},
     date: {
        type: Date,
        default: Date.now,
      },

    }
)

module.exports= mongoose.model("Notice",noticeSchema);