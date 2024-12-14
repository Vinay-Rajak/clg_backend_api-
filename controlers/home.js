
const homepage = (req,res)=>{
    res.send({"this is home page  of the api": 
        { faulty:{1: "/faculty/get/:role -- (faculty list according to  role eg. (regular, non_regular, gust)", 2: "/faculty/create -- (create the faculty profile (required query field are: _name , role, levelOfPost, email, education_Qulification)", 3: "/faculty/update -- ( updata the profile using the id of the faulty )" ,4:"/faulty/delete --(delete the profile using the id of the faulty )"}
        ,Notice:{1:"/notice/get -- (return the latest 10 notice of the collage )", 2:"/notice/creaate --  (using the query parameter 'title' and the 'file' of the notice )",3:"/notice/delete  --   (using the id of the notice )"}
            , student: {1: "/student/get/:roll/:sem" ,2:"/student/creaate ",3:"/student/delete/:roll",4: "student/update/:roll/:semester/:subject"}
                ,placementData:{1:"/placement/get",2:"/placement/creaate"}} });

}
const about= (req,res)=>{
    res.send("this is about page in home ")
}

module.exports={homepage, about};