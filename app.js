const express = require("express");
const app= express();
const home= require("./routes/home");
const profile =  require("./routes/profile");
const bodyParser = require("body-parser");
const placement  = require("./routes/placementData");
const faculty = require("./routes/faculty");
const notice = require("./routes/notice");
const student = require("./routes/student"); 
const ConnectDB = require("./config/database");

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

ConnectDB();


app.use( "/api" ,home);
app.use("/profile", profile);
app.use("/student", student);
app.use("/faculty", faculty);
 app.use("/placement",placement);
 app.use("/notice", notice);
app.listen(8000, ()=>{
    console.log("connected to server ");  
})