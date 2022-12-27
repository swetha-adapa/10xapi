const express=require("express");
const mongoose=require("mongoose");
const userModel=require("./userSchema");
const postModel=require("./postSchema");


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const port=3000;
app.listen(port,()=>{
    console.log("server started")
});

mongoose.connect("mongodb://localhost/10x",()=>{
    console.log("connect to db")
},(err)=>{
    console.log(err);
})




app.post("/v1/myclass",(req,res)=>{
    userModel.create({class:req.body.class, 
        studentcount:req.body.studentcount})
.then((data)=>{
    res.status(200).send(data)
}).catch((err)=>{
console.log(err)
});
})

app.post("/v1/myClass/:myclassId/student",(req,res)=>{
    postModel.create({name:req.body.name , classid:req.body.classid})
    .then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
    console.log(err)
    });
    })

   

    app.get("/v1/myclass",(req,res)=>{
        userModel.find().then((data)=>{
            res.status(200).send(data)
        })
    }) 


    app.get("/v1/myclass/:id",(req,res)=>{
        userModel.find({class: req.params.id}).then((data)=>{
            res.status(200).send(data)
        }).catch((err)=>{
            res.status(400).send("There is no class at that id")
        })
    }) 


    
    app.get("/v1/myclass/:id",(req,res)=>{
        postModel.find().then((data)=>{
            res.status(200).send(data)
        }).catch((err)=>{
            res.status(400).send("There is no student at that id")
        })
    }) 

    
    app.delete("/v1/myclass/delete/:id", (req, res)=> {
        userModal.deleteOne({class: req.params.id}).then(()=> {
            res.status(200).send("class deleted")
        })
    })
