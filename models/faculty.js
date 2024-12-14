const mongoose  = require("mongoose");

const facultySchema = new mongoose.Schema({
  
    name:{type : String , required:true },
    role: {type :String , enum:["regular", "non_regular", "gust"],required:true},
    levelOfPost:{type :String , enum:["UG & PG", "UG"],required:true},
    email:{type :String , required:true , unique:true},
    education_Qulification:{type:[String],required:true},
    experience:{type:Number, },
    menbership:{type:[String]},
    researchArea:{type:[String]},
    publication:{type: [String]},
    profileImage:{type:Buffer}

})

module.exports = mongoose.model("faculty", facultySchema);