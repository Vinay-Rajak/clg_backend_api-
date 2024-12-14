const mongoose = require("mongoose");
// const midSemSchema = new mongoose.Schema({
//     subject: { type: String },
//     midSem1: { type: Number,  min: 0, max: 30, default:0 },
//     midSem2: { type: Number, min: 0, max: 30, default:0 },
//     midSem3: { type: Number, min: 0, max: 30 , default:0},
// });
const marks = { s1:Number,s2:Number,s3:Number,s4:Number,s5:Number};
const semesterSchema = new mongoose.Schema({
    sem:{type:Number,min:1,max:8},
    midSemMarks: marks
}) ;

const stdSchema = new mongoose.Schema({
  
    rollNo:{type:String,  required:true, unique: true},
    stdName:{type:String, required:true},
    semester:[semesterSchema]
})

module.exports = mongoose.model("Student",stdSchema);